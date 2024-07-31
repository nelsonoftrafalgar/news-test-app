import { locales } from './locales'

export interface Article {
	author: string
	title: string
	description: string
	urlToImage: string
	id: string
}

export type Locale = (typeof locales)[number]
