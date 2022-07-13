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

import { Inventory, InventoryRequest, InventoryUpdate } from "../schema/inventory"

@api({
  name: "Inventory API",
  version: "1.0.0",
})
class InventoryApi {
  @securityHeader
  "Authorization": String
}

// create inventory
@endpoint({
  method: "POST",
  path: "/locations/:location/items/:item",
})
class CreateInventory {
  @request
  request(
    @pathParams
    pathParams: {
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
  path: "/locations/:location/items/:item",
})
class GetInventory {
  @request
  request(
    @pathParams
    pathParams: {
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
  path: "/locations/:location/items/:item",
})
class ReplaceInventory {
  @request
  request(
    @pathParams
    pathParams: {
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
  path: "/locations/:location/items/:item",
})
class PatchInventory {
  @request
  request(
    @pathParams
    pathParams: {
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
  path: "/locations/:location/items/:item",
})
class DeleteInventory {
  @request
  request(
    @pathParams
    pathParams: {
      location: Int64,
      item: Int64,
    },
  ) {}

  @response({ status: 204 })
  response() {}
}
