import { Component } from 'react'

import { Card, Flex, Typography } from 'antd'

import 'antd/dist/reset.css'
import './movie-item.css'
import AboutFilm from '../about-film/about-film'
import ReleaseDate from '../release-date/release-date'
import Genre from '../genre/genre'
import MovieTitle from '../movie-title/movie-title'
import MoviePreview from '../movie-preview/movie-preview'

export default class MovieItem extends Component {
	render() {
		const { title, overview, release_date, backdrop_path } = this.props

		return (
			<Card
				bodyStyle={{ padding: 0, overflow: 'hidden' }}
				style={{ width: 500, height: 281, marginBottom: 32, marginRight: 32 }}
			>
				<Flex justify='space-between'>
					<MoviePreview posterPath={backdrop_path} />
					<Flex vertical align='flex-start' justify='space-around'>
						<Typography.Title level={4}>
							<MovieTitle title={title} />
						</Typography.Title>
						<ReleaseDate release_date={release_date} />
						<Genre />
						<AboutFilm overview={overview} />
					</Flex>
				</Flex>
			</Card>
		)
	}
}
