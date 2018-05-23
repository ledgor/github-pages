import { Controller } from 'stimulus'
import { parse as parseQuery } from 'query-string'

export default class extends Controller {
	static targets = ['field']

	initialize() {
		const query = parseQuery(window.location.hash)
		this.fieldTarget.value = query.token
	}

	copy() {
		this.fieldTarget.select()
		document.execCommand('copy')
	}
}
