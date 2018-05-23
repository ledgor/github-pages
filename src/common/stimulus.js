import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'

const application = Application.start()

export default (context) =>
	application.load(definitionsFromContext(context))
