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

import { Order, OrderRequest, OrderEvent } from "../../schema/orders"

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
