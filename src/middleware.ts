import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from './locales'

import { Locale } from './types'

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl
	const [currentLocale] = pathname.split('/').filter(Boolean)

	if (locales.includes(currentLocale as Locale)) {
		return NextResponse.next()
	}

	request.nextUrl.pathname = `/${defaultLocale}`
	return NextResponse.redirect(request.nextUrl)
}
export const config = {
	matcher: ['/((?!_next).*)']
}
