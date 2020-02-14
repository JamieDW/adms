import { Model as BaseModel } from 'vue-api-query'

export default class Model extends BaseModel {

  // define a base url for a REST API
  baseURL () {
    return '/api'
  }

  // implement a default request method
  request (config) {
    return this.$http.request(config)
  }

  // override the default page and limit name to work with the following
  // https://docs.spatie.be/laravel-query-builder/v2/advanced-usage/pagination/
  parameterNames () {
    return {
      page:   'page[number]',
      limit:  'page[size]'
    }
  }
}
