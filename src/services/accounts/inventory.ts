import {
  api,
  body,
  endpoint,
  pathParams,
  request,
  response,
  securityHeader,
  Int64,
  String,
} from "@airtasker/spot"

import { Inventory, InventoryRequest, InventoryUpdate } from "../../schema/inventory"

@api({
  name: "Inventory API",
  version: "1.0.0",
})
class ManageInventoryApi {
  @securityHeader
  "Authorization": String
}

// create inventory
@endpoint({
  method: "POST",
  path: "/accounts/:account/locations/:location/items/:item",
})
class ManageCreateInventory {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      location: Int64,
      item: Int64,
    },

    @body
    body: InventoryRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Inventory
  ) {}
}

// get inventory
@endpoint({
  method: "GET",
  path: "/accounts/:account/locations/:location/items/:item",
})
class ManageGetInventory {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      location: Int64,
      item: Int64,
    },
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Inventory,
  ) {}
}

// replace inventory
@endpoint({
  method: "PUT",
  path: "/accounts/:account/locations/:location/items/:item",
})
class ManageReplaceInventory {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      location: Int64,
      item: Int64,
    },

    @body
    body: InventoryRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Inventory
  ) {}
}

// update inventory
@endpoint({
  method: "PATCH",
  path: "/accounts/:account/locations/:location/items/:item",
})
class ManagePatchInventory {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      location: Int64,
      item: Int64,
    },

    @body
    body: InventoryUpdate
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Inventory,
  ) {}
}

// delete inventory
@endpoint({
  method: "DELETE",
  path: "/accounts/:account/locations/:location/items/:item",
})
class ManageDeleteInventory {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      location: Int64,
      item: Int64,
    },
  ) {}

  @response({ status: 204 })
  response() {}
}
