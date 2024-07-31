'use client'

import { Article, Locale } from '@/types'
import { Card, Col, Row } from 'antd'

import Image from 'next/image'
import Link from 'next/link'

interface NewsListProps {
	data: Article[]
	locale: Locale
}

export const NewsList = ({ data, locale }: NewsListProps) => {
	return (
		<Row className='row' gutter={[16, 16]}>
			{data.map(({ title, urlToImage, author, id }) => {
				return (
					<Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={2} key={id}>
						<Link href={`${locale}/articles/${id}`}>
							<Card
								className='list-card'
								hoverable
								cover={
									<div className='image-container'>
										<Image src={urlToImage} alt={title} fill objectFit='cover' />
									</div>
								}
							>
								<Card.Meta title={title} description={author} />
							</Card>
						</Link>
					</Col>
				)
			})}
		</Row>
	)
}
