const _components = {};

export function getComponent(id) {
  return _components[id];
}

export function registerComponent(key, Component) {
  if (key && Component) {
    if (_components[key]) {
      console.warn(
        `Component ${key} is already registered. Rename key string for  `,
        Component
      );
    } else {
      _components[key] = Component;
    }
  }

  return Component;
}
