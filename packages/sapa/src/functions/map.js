const memory = new WeakMap();

export function addVNodeMap(vnode) {
  if (!memory.has(vnode.el)) {
    memory.set(vnode.el, vnode);
  }
}

export function deleteVNodeMap(vnode) {
  if (memory.has(vnode.el)) {
    memory.delete(vnode.el);
  }
}

export function getVNodeMap(el) {
  return memory.get(el);
}
