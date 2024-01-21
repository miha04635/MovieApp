import React from 'react'

import { Flex } from 'antd'

import 'antd/dist/reset.css'
import MovieItem from '../movie-item/movie-item'
import './movie-list.css'

const MovieList = ({ films }) => {
	const elements = films.map(item => {
		const { id, ...itemProps } = item
		return <MovieItem key={id} {...itemProps} />
	})

	return (
		<Flex
			wrap='wrap'
			style={{ width: 1070 }}
			justify='space-around'
			className='movieList'
		>
			{elements}
		</Flex>
	)
}

export default MovieList
