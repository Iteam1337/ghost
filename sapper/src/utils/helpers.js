const getRouteFromPostTag = (tag) => {
  switch (tag) {
    case 'erbjudande':
      return 'services'
    case 'case':
      return 'case'
    case 'blog':
      return 'blog'
  }
}

const getIngressFromHTMLBlob = (post) => {
  const [, ingress] = post.match(/<p>(.*?)<\/p>/)

  return ingress
}

const getHTMLBlobWithoutIngress = (post) => post.replace(/<p>(.*?)<\/p>/, '')

export default {
  getRouteFromPostTag,
  getIngressFromHTMLBlob,
  getHTMLBlobWithoutIngress,
}
