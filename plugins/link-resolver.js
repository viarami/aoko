/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function(doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'portfolio') {
    return `/portfolio/${doc.uid}`
  }

  if (doc.type === 'page') {
    return `/${doc.uid}`
  }

  return '/not-found'
}
