require('dotenv').config()

import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV, GHOST_URL, GHOST_KEY } = process.env
const dev = NODE_ENV === 'development'

const redirect = (req, res, next) => {
  const path = req.path.toLowerCase()

  const redirects = {
    '/medarbetare': {
      status: 410,
    },
  }

  if (Object.keys(redirects).includes(path)) {
    res.redirect(redirects[path].status, redirects[path].location)
  }

  return next()
}

const resContent = (status) => {
  switch (status) {
    case 301:
      return `Redirecting to ${location}`
    case 410:
      return 'Gone'
    default:
      return ''
  }
}

const redirectHelper = (_, res, next) => {
  res.redirect = (status, location) => {
    const str = resContent(status)

    res.writeHead(status, {
      'Content-Type': 'text/plain',
      'Content-Length': str.length,
      ...(location && { Location: location }),
    })
    res.end(str)
  }
  return next()
}

polka()
  .use(redirectHelper)
  .get('/*', redirect)
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware({
      session: () => ({
        GHOST_KEY,
        GHOST_URL,
      }),
    })
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err)
  })
