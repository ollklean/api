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
  Integer,
  Int64,
  String,
  Number,
} from "@airtasker/spot"

@api({
  name: "Item API",
  version: "1.0.0",
})
class ItemApi {
  @securityHeader
  "Authorization": String
}

// get items
@endpoint({
  method: "GET",
  path: "/items",
})
class ListItems {
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
    body: Item[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// create item
@endpoint({
  method: "POST",
  path: "/items",
})
class CreateItem {
  @request
  request(
    @body
    body: ItemRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Item
  ) {}
}

// get item
@endpoint({
  method: "GET",
  path: "/items/:id",
})
class GetItem {
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
    body: Item,
  ) {}
}

// update items
@endpoint({
  method: "PATCH",
  path: "/items/:id",
})
class PatchItem {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: ItemRequest
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Item,
  ) {}
}

// delete item
@endpoint({
  method: "DELETE",
  path: "/items/:id",
})
class DeleteItem {
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
interface Names {
  ar: String
  en: String
}

interface Descriptions {
  ar: String
  en: String
}

interface Attributes {
  tags: String[]
}

interface Images {
  default: String
  thumbnail: String
}

interface Rates {
  default: Number
}

interface ItemCategory {
  id: Int64
  names: Names
}

interface Item {
  id: Int64
  category: ItemCategory
  names: Names
  descriptions: Descriptions
  attributes: Attributes
  images: Images
  rates: Rates
  is_active: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

interface ItemRequest {
  category: ItemCategory
  names: Names
  descriptions: Descriptions
  attributes: Attributes
  images: Images
  rates: Rates
}
