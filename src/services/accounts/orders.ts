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

import { Order, OrderRequest, OrderUpdate, OrderEvent } from "../../schema/orders"

@api({
  name: "Order API",
  version: "1.0.0",
})
class ManageOrderApi {
  @securityHeader
  "Authorization": String
}

// get orders
@endpoint({
  method: "GET",
  path: "/accounts/:account/orders",
})
class ManageListOrders {
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
    body: Order[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// create order
@endpoint({
  method: "POST",
  path: "/accounts/:account/orders",
})
class ManageCreateOrder {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
    },

    @body
    body: OrderRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Order
  ) {}
}

// get order
@endpoint({
  method: "GET",
  path: "/accounts/:account/orders/:id",
})
class ManageGetOrder {
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
    body: Order,
  ) {}
}

// update order
@endpoint({
  method: "PATCH",
  path: "/accounts/:account/orders/:id",
})
class ManagePatchOrder {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
    },

    @body
    body: OrderUpdate
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Order,
  ) {}
}

// confirm order
@endpoint({
  method: "POST",
  path: "/accounts/:account/orders/:id/events/confirm",
})
class ManageConfirmOrder {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
    },

    @body
    body: OrderUpdate
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Order,
  ) {}
}

// cancel order
@endpoint({
  method: "POST",
  path: "/accounts/:account/orders/:id/events/cancel",
})
class ManageCancelOrder {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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

// process order
@endpoint({
  method: "POST",
  path: "/accounts/:account/orders/:id/events/process",
})
class ManageProcessOrder {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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

// progress order
@endpoint({
  method: "POST",
  path: "/accounts/:account/orders/:id/events/progress",
})
class ManageProgressOrder {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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

// deliver order
@endpoint({
  method: "POST",
  path: "/accounts/:account/orders/:id/events/deliver",
})
class ManageDeliverOrder {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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

// close order
@endpoint({
  method: "POST",
  path: "/accounts/:account/orders/:id/events/close",
})
class ManageCloseOrder {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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

// archive order
@endpoint({
  method: "POST",
  path: "/accounts/:account/orders/:id/events/archive",
})
class ManageArchiveOrder {
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
    body: Order,
  ) {}
}
