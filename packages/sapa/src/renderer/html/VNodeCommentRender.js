async function makeHtml(vNodeInstance) {
  return `<!-- ${vNodeInstance.value} -->`;
}

export async function VNodeCommentRender(vNodeInstance) {
  return await makeHtml(vNodeInstance);
}
