import { jwtVerify, SignJWT } from 'jose'

function getSecret() {
  const secret = process.env.PRIMETOOLS_SECRET
  if (!secret) throw new Error('PRIMETOOLS_SECRET is not set')
  return new TextEncoder().encode(secret)
}

export async function verifyGateToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getSecret(), {
      algorithms: ['HS256'],
    })
    return payload
  } catch {
    return null
  }
}

export async function signGateToken() {
  return new SignJWT({ sub: 'primetools' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('12h')
    .sign(getSecret())
}
