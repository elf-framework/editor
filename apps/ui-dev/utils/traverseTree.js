export function traverseTree(list, callback, depth = 0, parent = undefined) {
  if (Array.isArray(list)) {
    return list.map((it) => traverseTree(it, callback)).flat(Infinity);
  } else if (Array.isArray(list?.items)) {
    return [
      callback(list, depth, parent),
      ...list.items
        .map((it) => traverseTree(it, callback, depth + 1, list))
        .flat(Infinity),
    ];
  } else {
    return [callback(list, depth, parent)];
  }
}
