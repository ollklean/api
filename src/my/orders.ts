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
  name: "My Order API",
  version: "1.0.0",
})
class MyOrderApi {
  @securityHeader
  "Authorization": String
}

// get my orders
@endpoint({
  method: "GET",
  path: "/my/orders",
})
class ListMyOrders {
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
    body: Order[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// create my order
@endpoint({
  method: "POST",
  path: "/my/orders",
})
class CreateMyOrder {
  @request
  request(
    @body
    body: OrderRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Order
  ) {}
}

// get my order
@endpoint({
  method: "GET",
  path: "/my/orders/:id",
})
class GetMyOrder {
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
    body: Order,
  ) {}
}

// cancel my order
@endpoint({
  method: "POST",
  path: "/my/orders/:id/events/cancel",
})
class CancelMyOrder {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: OrderEvent
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Order,
  ) {}
}

// models
interface Names {
  ar: String
  en: String
}

interface Promises {
  processed_at: DateTime
  expected_at: DateTime
}

interface Voucher {
  code: String
}

interface Promotion {
  code: String
  percent: Number
}

interface Discount {
  code: String
  percent: Number
}

interface OrderCustomer {
  id: Int64
  names: Names
}

interface OrderItem {
  id: Int64
  names: Names
}

interface OrderLocation {
  id: Int64
  names: Names
}

interface OrderLine {
  id: Int64
  location: OrderLocation
  item: OrderItem
  quantity: Integer
  rate: Number
  promotions: Promotion[]
  discounts: Discount[]
  instructions: String[]
}

interface Order {
  id: Int64
  customer: OrderCustomer
  ordered_at: DateTime
  fulfilled_at: DateTime
  promises: Promises  
  lines: OrderLine[]
  vouchers: Voucher[]
  promotions: Promotion[]
  discounts: Discount[]
  amount: Number
  status: String
  notes: String[]
  is_open: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

interface OrderLineRequest {
  location: OrderLocation
  item: OrderItem
  quantity: Integer
  rate: Number
  instructions: String[]
}

interface OrderRequest {
  customer: OrderCustomer
  ordered_at: DateTime
  promises: Promises  
  lines: OrderLineRequest[]
  vouchers: Voucher[]
  notes: String[]
}

interface OrderLineEvent {
  instructions: String[]
}

interface OrderEvent {
  lines: OrderLineEvent[]
  notes: String[]
}
