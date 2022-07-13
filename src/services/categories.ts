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

import { Category, CategoryRequest } from "../schema/categories"

@api({
  name: "Category API",
  version: "1.0.0",
})
class CategoryApi {
  @securityHeader
  "Authorization": String
}

// get categories
@endpoint({
  method: "GET",
  path: "/categories",
})
class ListCategories {
  @request
  request(
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
  path: "/categories",
})
class CreateCategory {
  @request
  request(
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
  path: "/categories/:id",
})
class GetCategory {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
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
  path: "/categories/:id",
})
class PatchCategory {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
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
  path: "/categories/:id",
})
class DeleteCategory {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },
  ) {}

  @response({ status: 204 })
  response() {}
}
