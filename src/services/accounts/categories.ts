import {
  api,
  body,
  endpoint,
  headers,
  pathParams,
  queryParams,
  request,
  response,
  securityHeader,
  Integer,
  Int64,
  String,
} from "@airtasker/spot"

import { Category, CategoryRequest } from "../../schema/categories"

@api({
  name: "Manage Category API",
  version: "1.0.0",
})
class ManageCategoryApi {
  @securityHeader
  "Authorization": String
}

// get categories
@endpoint({
  method: "GET",
  path: "/accounts/:account/categories",
})
class ManageListCategories {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
    },

    @queryParams
    queryParams: {
      page?: Integer
    }
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Category[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// create category
@endpoint({
  method: "POST",
  path: "/accounts/:account/categories",
})
class ManageCreateCategory {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
    },

    @body
    body: CategoryRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Category
  ) {}
}

// get category
@endpoint({
  method: "GET",
  path: "/accounts/:account/categories/:id",
})
class ManageGetCategory {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
    },
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Category,
  ) {}
}

// update category
@endpoint({
  method: "PATCH",
  path: "/accounts/:account/categories/:id",
})
class ManagePatchCategory {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
    },

    @body
    body: CategoryRequest
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Category,
  ) {}
}

// delete category
@endpoint({
  method: "DELETE",
  path: "/accounts/:account/categories/:id",
})
class ManageDeleteCategory {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
    },
  ) {}

  @response({ status: 204 })
  response() {}
}
