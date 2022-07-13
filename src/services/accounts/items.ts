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

import { Item, ItemRequest } from "../../schema/items"

@api({
  name: "Item API",
  version: "1.0.0",
})
class ManageItemApi {
  @securityHeader
  "Authorization": String
}

// get items
@endpoint({
  method: "GET",
  path: "/accounts/:account/items",
})
class ManageListItems {
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
  path: "/accounts/:account/items",
})
class ManageCreateItem {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
    },

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
  path: "/accounts/:account/items/:id",
})
class ManageGetItem {
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
    body: Item,
  ) {}
}

// update item
@endpoint({
  method: "PATCH",
  path: "/accounts/:account/items/:id",
})
class ManagePatchItem {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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
  path: "/accounts/:account/items/:id",
})
class ManageDeleteItem {
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
