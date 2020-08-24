const getRouteFromPostTag = (tag) => {
  switch (tag) {
    case 'erbjudande':
      return 'services'
    case 'case':
      return 'case'
  }
}

export default { getRouteFromPostTag }
