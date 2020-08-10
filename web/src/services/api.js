import { GHOST_URL } from '../config/ghost_url.js'
import { GHOST_KEY } from '../config/ghost_key.js'

/*
 * Fetch helpers
 */

const addKeyParameterToUrl = (url) => {
  let key = `key=${GHOST_KEY}`
  if (url.indexOf('?') > -1) {
    return `${url}&${key}`
  } else {
    return `${url}?${key}`
  }
}

const call = async ({ uri, options }) => {
  // Build full URL.
  let url = `${GHOST_URL}/ghost/api/v3/content${uri}`

  // Apply Ghost API key.
  url = addKeyParameterToUrl(url)

  // Call Ghost API.
  const response = await window.fetch(url, options)

  if (response.ok) {
    return response.json()
  }

  console.error(response.status, response.statusText, response.json())
  throw new Error(response.statusText)
}

const get = async (uri) => {
  const data = await call({
    uri,
  })

  console.log('DEBUG', 'GET', uri, data)
  return data
}

/*
 * API collection
 */
export const API = {
  Pages: {
    Filter: async (tags) => {
      console.log('hej!')
      let filter = '?filter='

      tags.forEach((tag) => {
        filter += `tag:${tag},`
      })

      filter = filter.substring(0, filter.length - 1)

      return await get(`/pages${filter}`)
    },
  },
  Posts: {
    Filter: async (tags) => {
      let filter = '?filter='

      tags.forEach((tag) => {
        filter += `tag:${tag},`
      })

      filter = filter.substring(0, filter.length - 1)

      return await get(`/posts${filter}`)
    },
    List: async () => {
      return await get('/posts')
    },
  },
}
