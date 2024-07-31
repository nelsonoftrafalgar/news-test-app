import { Article, Locale } from '@/types'

import { SingleArticle } from '@/components/SingleArticle'
import { locales } from '@/locales'

export interface PageProps {
	params: {
		locale: Locale
		id: string
	}
}

export async function generateStaticParams() {
	const articles = await Promise.all(
		locales.map((locale) =>
			fetch(`http://localhost:8000/${locale}`).then((res) => res.json())
		)
	)

	return articles.map(({ id }: Article) => id)
}

async function getSingleArticle(locale: Locale, id: string): Promise<Article> {
	const res = await fetch(`http://localhost:8000/${locale}/${id}`)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Page({ params: { id, locale } }: PageProps) {
	const article = await getSingleArticle(locale, id)
	return <SingleArticle article={article} locale={locale} />
}
