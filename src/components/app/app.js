import React, { Component } from 'react'

import { Flex } from 'antd'
import 'antd/dist/reset.css'
import './app.css'
import Service from '../services/services'
import MovieList from '../movie-list'

export default class App extends Component {
	service = new Service()
	state = {
		movieData: [],
	}

	constructor() {
		super()
		this.cardList()
	}
	cardList() {
		this.service.getMovies().then(body => {
			this.setState({
				movieData: body,
			})
		})
	}
	render() {
		const { movieData } = this.state

		return (
			<Flex justify='space-around' className='app'>
				<MovieList films={movieData} />
			</Flex>
		)
	}
}
