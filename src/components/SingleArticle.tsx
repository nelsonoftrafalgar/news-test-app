'use client'

import { Article, Locale } from '@/types'
import { Card, Col, Row } from 'antd'

import Image from 'next/image'
import Link from 'next/link'

interface SingleArticleProps {
	article: Article
	locale: Locale
}

export const SingleArticle = ({ article, locale }: SingleArticleProps) => {
	const { urlToImage, title, author, description } = article
	return (
		<Row className='row' align={'middle'} justify={'center'}>
			<Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={2}>
				<Card
					cover={
						<div className='image-container'>
							<Image src={urlToImage} alt={title} fill objectFit='cover' />
						</div>
					}
				>
					<h2>{title}</h2>
					<h4>by: {author}</h4>
					<p>{description}</p>
				</Card>
				<Link href={`/${locale}`}>Back to list</Link>
			</Col>
		</Row>
	)
}
