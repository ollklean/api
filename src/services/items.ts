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

import { Item, ItemRequest } from "../schema/items"

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

// update item
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
