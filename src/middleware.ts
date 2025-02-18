import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { cookies } from 'next/headers'

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = ['ru', 'en']
  console.log('request', request)
  const languagesNegotiator = new Negotiator({ headers: negotiatorHeaders }).languages()
  // languagesNegotiator при запросе из бота вебмастера выдает '*'
  console.log('languagesNegotiator', languagesNegotiator)
  const languages = languagesNegotiator[0] === '*' ? ['default'] : languagesNegotiator
  const locale = match(languages, locales, 'default')
  console.log('MATCH', locale)
  const selectedLocale = cookies().get('locale')?.value
  return selectedLocale || locale
}

export function middleware(request: NextRequest) {
  getLocale(request)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|static|yaml|separate-methods-yaml|files).*)']
}
