import loadApplication from 'common/stimulus'
import 'common/styles'

const context = require.context('./controllers', true, /\.js$/)
loadApplication(context)
