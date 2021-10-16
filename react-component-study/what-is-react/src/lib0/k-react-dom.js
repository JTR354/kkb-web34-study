import { isFn, isStr } from "./utils";

function render(vnode, container, callback) {
  /**
   * 1. vnode -> node
   * 2. render
   */
  const node = createNode(vnode);
  container.appendChild(node);
  isFn(callback) && callback();
}

function createNode(vnode) {
  let node;
  const { type, props } = vnode;
  if (isStr(type)) {
    node = document.createElement(type);
    reconcileChildren(node, props.children);
    updateNode(node, props);
  } else if (isFn(type)) {
    node = type.prototype.isReactComponent
      ? updateClassComponent(vnode)
      : updateFunctionComponent(vnode);
  } else {
    node = document.createTextNode(vnode);
  }
  return node;
}

function updateClassComponent(vnode) {
  const { type, props } = vnode;
  const instance = new type(props);
  const child = instance.render();
  return createNode(child);
}

function updateFunctionComponent(vnode) {
  const { type, props } = vnode;
  const child = type(props);
  return createNode(child);
}

function updateNode(node, nextValue) {
  Object.keys(nextValue).forEach((k) => {
    if (k !== "children") {
      node[k] = nextValue[k];
    }
  });
}

function reconcileChildren(parentNode, children) {
  let newChildren = Array.isArray(children) ? children : [children];
  for (let i = 0; i < newChildren.length; i++) {
    let child = newChildren[i];
    child && render(child, parentNode);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { render };
