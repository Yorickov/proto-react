const createRealNodeByVirtual = (virtual) => {
  if (virtual.nodeType === Node.TEXT_NODE) {
    return document.createTextNode('');
  }
  return document.createElement(virtual.tagName);
};

const sync = (virtualNode, realNode) => {
  // Sync element
  if (virtualNode.className !== realNode.className) {
    realNode.className = virtualNode.className;
  }
  if (virtualNode.attributes) {
    [...virtualNode.attributes].forEach((attr) => {
      if (!(attr.value === realNode[attr.name])) {
        realNode[attr.name] = attr.value;
      }
    });
  }
  if (virtualNode.dataset) {
    Object.keys(virtualNode.dataset).forEach((name) => {
      realNode.dataset[name] = virtualNode.dataset[name];
    });
  }
  if (virtualNode.nodeValue !== realNode.nodeValue) {
    realNode.nodeValue = virtualNode.nodeValue;
  }

  // Sync child nodes
  const virtualChildren = virtualNode.childNodes;
  const realChildren = realNode.childNodes;

  for (let i = 0; i < virtualChildren.length || i < realChildren.length; i += 1) {
    const virtual = virtualChildren[i];
    const real = realChildren[i];

    // Remove
    if (virtual === undefined && real !== undefined) {
      realNode.remove(real);
    }

    // Update
    if (virtual !== undefined && real !== undefined && virtual.tagName === real.tagName) {
      sync(virtual, real);
    }

    // Replace
    if (virtual !== undefined && real !== undefined && virtual.tagName !== real.tagName) {
      const newReal = createRealNodeByVirtual(virtual);
      sync(virtual, newReal);
      realNode.replaceChild(newReal, real);
    }

    // Add
    if (virtual !== undefined && real === undefined) {
      const newReal = createRealNodeByVirtual(virtual);
      sync(virtual, newReal);
      realNode.appendChild(newReal);
    }
  }
};

export default (virtualDom, realDomRoot) => {
  const virtualDomRoot = document.createElement(realDomRoot.tagName);

  virtualDomRoot.id = realDomRoot.id;
  virtualDomRoot.appendChild(virtualDom);

  sync(virtualDomRoot, realDomRoot);
};
