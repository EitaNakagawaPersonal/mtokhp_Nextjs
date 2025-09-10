// middleware.js
const { NextResponse } = require('next/server')

const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER
const BASIC_AUTH_PASS = process.env.BASIC_AUTH_PASS

function middleware(req) {
  const basicAuth = req.headers.get('authorization')
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':')
    if (user === BASIC_AUTH_USER && pwd === BASIC_AUTH_PASS) {
      return NextResponse.next()
    }
  }
  return new NextResponse('Auth Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

module.exports = { middleware }
module.exports.config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}