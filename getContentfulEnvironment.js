require('dotenv').config({ path: '.env.local' })

const contentfulManagement = require('contentful-management')

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CF_MANAGEMENT_API_ACCESS_TOKEN
  })

  return contentfulClient
    .getSpace(process.env.CF_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CF_ENVIRONMENT))
}
