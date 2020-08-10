import { API_URL } from '../config/api_url.js'
import { Cookie } from './cookie.js'

import 'whatwg-fetch'

/*
 * Debug settings
 */
let DEBUG = false
if (window.location.hostname === 'localhost') {
  DEBUG = true
}

/*
 * Fetch helpers
 */

const call = async ({ uri, options }) => {
  const userToken = Cookie.get('galleri-olympen-user-token')

  if (userToken) {
    if (!options) {
      options = {}
    }

    if (!options.headers) {
      options.headers = {}
    }

    options.headers['Authorization'] = userToken
  }

  const url = `${API_URL}${uri}`
  if (DEBUG) {
    console.log('DEBUG', 'fetch', url, options)
  }

  const response = await window.fetch(url, options)
  return response.json()
}

const get = async (uri) => {
  return await call({
    uri,
  })
}

const manipulate = async (uri, data, verb) => {
  return await call({
    uri,
    options: {
      body: JSON.stringify(data),
      method: verb,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  })
}

const post = async (uri, data) => {
  return await manipulate(uri, data, 'POST')
}

const put = async (uri, data) => {
  return await manipulate(uri, data, 'PUT')
}

/*
 * API collection
 */
export const API = {
  License: {
    consume: async (licenseKey) => {
      return await put(`/license/${licenseKey}`)
    },
  },
  Mirror: {
    Statement: {
      get: async () => {
        return await get('/mirror')
      },
      save: async (data) => {
        return await post(`/mirror`, data)
      },
    },

  },
  User: {
    create: async (userInfo) => {
      const createdUser = await post('/user', userInfo)

      if (DEBUG) {
        console.log('DEBUG', 'new user', createdUser)
      }

      return createdUser
    },
    get: async () => {
      return await get(`/user`)
    },
    update: async (user) => {
      return await put(`/user`, user)
    },
  },

  // A helper for getting the checkout URL.
  getCheckoutUrl: () => {
    return `${API_URL}/checkout`
  },

  getDeAuthorizeUrl: () => {
    return `${API_URL}/deauth`
  },

  // A helper for getting the render URL.
  getRenderUrl: (userId) => {
    return `${API_URL}/render/`
  },
}
