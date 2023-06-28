export const getTagName = (tagId, tagItems) => {
  const tagName = tagItems.find((tag) => tag.sys.id === tagId).name
  return tagName
}
