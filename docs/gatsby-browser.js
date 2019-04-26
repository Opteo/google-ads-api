// import { anchorate } from 'anchorate'

exports.onRouteUpdate = (args) => {
	console.log(args)
  	// anchorate()
}

exports.shouldUpdateScroll = (args) => {
	console.log('checking if should update scroll...', args)
	return false
}