export default class Service {
	_apiBase = 'https://api.themoviedb.org/3/trending/movie'

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`)

		if (!res.ok) {
			throw new Error(url, res.status)
		}
		return await res.json()
	}
	async getMovies() {
		const res = await this.getResource(
			`/day?api_key=a018f4609f3a0dfc6bc8469fe19dc494`
		)
		return res.results
	}
}
