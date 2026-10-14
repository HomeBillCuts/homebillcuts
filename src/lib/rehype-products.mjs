// Turns markdown product blocks ("### 1) Best X: Name" + "Why..." + list of Amazon links)
// into product cards, and marks every Amazon link as sponsored.
const text = (n) => (n.type === 'text' ? n.value : (n.children || []).map(text).join(''));
const isAmz = (n) => n.type === 'element' && n.tagName === 'a' && /amazon\.com|amzn\.to/.test(n.properties?.href || '');

function walk(node, fn) {
  fn(node);
  (node.children || []).forEach((c) => walk(c, fn));
}

export default function rehypeProducts() {
  return (tree) => {
    walk(tree, (n) => {
      if (isAmz(n)) {
        n.properties.rel = ['sponsored', 'nofollow', 'noopener'];
        n.properties.target = '_blank';
        if (/^\s*(view|check|buy|see)\b.*amazon/i.test(text(n))) {
          n.children = [{ type: 'text', value: 'Check price on Amazon' }];
          n.properties.className = ['amz-btn'];
          n.isBtn = true;
        }
      }
    });
    walk(tree, (el) => {
      if (!el.children) return;
      el.children.forEach((c, i) => {
        const nx = el.children[i + 1];
        if (c.type === 'text' && nx && (nx.properties?.className || []).includes('amz-btn')) c.value = c.value.replace(/[:\s]+$/, ' ');
      });
    });
    walk(tree, (parent) => {
      if (!parent.children || (parent.properties?.className || []).includes('product')) return;
      const out = [];
      const kids = parent.children;
      for (let i = 0; i < kids.length; i++) {
        const k = kids[i];
        if (k.type === 'element' && k.tagName === 'ul') {
          const lis = (k.children || []).filter((c) => c.tagName === 'li');
          const hasBtn = (n) => { let b = false; walk(n, (x) => { if ((x.properties?.className || []).includes('amz-btn')) b = true; }); return b; };
          if (lis.length && lis.every(hasBtn)) {
            out.push({ type: 'element', tagName: 'div', properties: { className: ['product', 'product--group'] }, children: [k] });
            continue;
          }
        }
        // Old format: <p><strong>Group label:</strong></p> followed by a list of Amazon buttons
        if (k.type === 'element' && k.tagName === 'p') {
          const real = (k.children || []).filter((c) => !(c.type === 'text' && !c.value.trim()));
          if (real.length === 1 && real[0].tagName === 'strong') {
            let j = i + 1;
            while (j < kids.length && kids[j].type === 'text' && !kids[j].value.trim()) j++;
            const ul = kids[j];
            let btn = false;
            if (ul && ul.type === 'element' && ul.tagName === 'ul') walk(ul, (x) => { if ((x.properties?.className || []).includes('amz-btn')) btn = true; });
            if (btn) {
              const label = text(real[0]).replace(/[:\s]+$/, '');
              out.push({ type: 'element', tagName: 'div', properties: { className: ['product', 'product--group'] }, children: [
                { type: 'element', tagName: 'h3', properties: {}, children: [{ type: 'text', value: label }] }, ul] });
              i = j;
              continue;
            }
          }
        }
        const t = k.type === 'element' && k.tagName === 'h3' ? text(k) : '';
        const m = t ? (t.match(/^\s*\d+[).]\s*(.*)$/) || [t, t.trim()]) : null;
        if (!m) { out.push(k); continue; }
        let j = i + 1;
        const body = [];
        while (j < kids.length && !(kids[j].type === 'element' && /^h[1-3]$/.test(kids[j].tagName))) body.push(kids[j++]);
        let hasAmz = false;
        body.forEach((b) => walk(b, (x) => { if (isAmz(x) && (x.properties.className || []).includes('amz-btn')) hasAmz = true; }));
        if (!hasAmz) { out.push(k); continue; }
        let rest = m[1];
        let label = '';
        const c = rest.match(/^([^:]{3,60}):\s+(.+)$/);
        if (c) { label = c[1].trim(); rest = c[2].trim(); }
        k.children = [
          ...(label ? [{ type: 'element', tagName: 'span', properties: { className: ['product-label'] }, children: [{ type: 'text', value: label }] }] : []),
          { type: 'text', value: rest },
        ];
        body.forEach((b) => {
          if (b.type === 'element' && b.tagName === 'p' && b.children?.[0]?.tagName === 'strong' && /why (it|they) makes? the list/i.test(text(b.children[0]))) {
            b.children.shift();
            if (b.children[0]?.type === 'text') b.children[0].value = b.children[0].value.replace(/^\s+/, '');
          }
        });
        out.push({ type: 'element', tagName: 'div', properties: { className: ['product'] }, children: [k, ...body] });
        i = j - 1;
      }
      parent.children = out;
    });
  };
}
