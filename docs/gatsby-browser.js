// import { anchorate } from 'anchorate'

// exports.onRouteUpdate = (args) => {
//  console.log('updating route!', args)
// }

exports.disableCorePrefetching = () => true


const scrollTo = (id) => () => {
    const el = document.querySelector(id)
    if (el) return window.scrollTo(0, el.offsetTop - 20)
    return false
}

exports.onRouteUpdate = (args) => {
    const location = args.location
    const hash = location.hash
    if (hash) {
        window.setTimeout(scrollTo(hash), 10)
    }
}