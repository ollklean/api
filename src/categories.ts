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
  DateTime,
  Int32,
  Int64,
  String,
} from "@airtasker/spot"

@api({
  name: "Category Lookup API",
  version: "1.0.0",
})
class Categories {
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
      page?: Int32
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

// update categories
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

// models
interface Category {
  id: Int64
  parent_id?: Int64
  name: string
  description: string
  created_by: string
  updated_by: string
  created_at: DateTime
  updated_at: DateTime
}

interface CategoryRequest {
  parent_id?: Int64
  name: string
  description: string
}
