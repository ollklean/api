import {
  api,
  body,
  endpoint,
  pathParams,
  request,
  response,
  securityHeader,
  DateTime,
  Int64,
  String,
  Number,
} from "@airtasker/spot"

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

// models
interface Names {
  ar: String
  en: String
}

interface ItemCategory {
  id: Int64
  names: Names
}

interface LocationChain {
  id: Int64
  names: Names
}

interface Rates {
  default: Number
}

interface InventoryItem {
  id: Int64
  names: Names
  category: ItemCategory
}

interface InventoryLocation {
  id: Int64
  names: Names
  chain: LocationChain
}

interface Inventory {
  id: Int64
  item: InventoryItem
  location: InventoryLocation
  rates: Rates
  quantity: Number
  uom: String
  is_available: boolean
  is_promoted: boolean
  is_active: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

interface InventoryRequest {
  rates: Rates
  quantity: Number
  uom: String
}

interface InventoryUpdate {
  quantity: Number
  uom: String
}
