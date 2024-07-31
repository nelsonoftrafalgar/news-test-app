import { Article, Locale } from '@/types'

import { NewsList } from '@/components/NewsList'
import { locales } from '@/locales'

export interface PageProps {
	params: {
		locale: Locale
	}
}

export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }))
}

async function getArticleList(locale: Locale): Promise<Article[]> {
	const res = await fetch(`http://localhost:8000/${locale}`)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Page({ params: { locale } }: PageProps) {
	const articles = await getArticleList(locale)
	return <NewsList data={articles} locale={locale} />
}
