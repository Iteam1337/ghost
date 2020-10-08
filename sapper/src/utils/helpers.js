const getRouteFromPostTag = (tag) => {
  switch (tag) {
    case 'erbjudande':
      return 'services'
    case 'case':
      return 'case'
  }
}

const splitHTMLOnFirstParagraph = (post) => {
  const first = post.match(/<p>(.*?)<\/p>/)
  const rest = post.replace(first[0], '')

  return [first[1], rest]
}

export default { getRouteFromPostTag, splitHTMLOnFirstParagraph }
