const GHOST_KEY = '69ef634d3f43ce96eb4739d4d2'
const GHOST_URL = 'https://iteam-se.iteamdev.io'

/*
 * Each request to Ghost's API requires a content key.
 * This function adds it to the provided URL.
 */
const addKeyParameterToUrl = (url, ghost_key) => {
  const key = `key=${ghost_key}`
  if (url.indexOf('?') > -1) {
    return `${url}&${key}`
  } else {
    return `${url}?${key}`
  }
}

/*
 * Use fetch to make a request to Ghost's API.
 */
const call = async (context, { uri, options }) => {
  // Build full URL.
  let url = `${
    context.session.GHOST_URL || GHOST_URL
  }/ghost/api/v3/content${uri}`

  // Apply Ghost API key.
  url = addKeyParameterToUrl(url, context.session.GHOST_KEY || GHOST_KEY)

  // Call Ghost API.
  const response = await context.fetch(url, options)

  if (response.ok) {
    return response.json()
  }

  // Something has gone wrong.
  console.error(response.status, response.statusText, response.json())
  throw new Error(response.statusText)
}

/**
 * A wrapper for GET requests.
 */
const get = async (fetch, uri) => {
  const data = await call(fetch, {
    uri,
  })

  return data
}

/*
 * API collection
 */
export const API = (context) => ({
  Pages: {
    ByTags: async (tags) => {
      let filter = '?filter='

      tags.forEach((tag) => {
        filter += `tag:${tag},`
      })

      filter = filter.substring(0, filter.length - 1)

      return await get(context, `/pages${filter}`)
    },
  },
  Post: {
    BySlug: async (slug) => {
      const {
        posts: [post],
      } = await get(context, `/posts/slug/${slug}/`)

      return { post }
    },
  },
  Posts: {
    ByTags: async (tags) => {
      let filter = '?filter='

      tags.forEach((tag) => {
        filter += `tag:${tag},`
      })

      filter = filter.substring(0, filter.length - 1)

      return await get(context, `/posts${filter}&include=tags`)
    },
    List: async () => {
      return await get(context, '/posts')
    },
  },
})
