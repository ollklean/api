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

import { Order, OrderRequest, OrderUpdate, OrderEvent } from "../schema/orders"

@api({
  name: "Order API",
  version: "1.0.0",
})
class OrderApi {
  @securityHeader
  "Authorization": String
}

// get orders
@endpoint({
  method: "GET",
  path: "/orders",
})
class ListOrders {
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

// create order
@endpoint({
  method: "POST",
  path: "/orders",
})
class CreateOrder {
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

// get order
@endpoint({
  method: "GET",
  path: "/orders/:id",
})
class GetOrder {
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

// update order
@endpoint({
  method: "PATCH",
  path: "/orders/:id",
})
class PatchOrder {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
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
  path: "/orders/:id/events/confirm",
})
class ConfirmOrder {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
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
  path: "/orders/:id/events/cancel",
})
class CancelOrder {
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

// process order
@endpoint({
  method: "POST",
  path: "/orders/:id/events/process",
})
class ProcessOrder {
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

// progress order
@endpoint({
  method: "POST",
  path: "/orders/:id/events/progress",
})
class ProgressOrder {
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

// deliver order
@endpoint({
  method: "POST",
  path: "/orders/:id/events/deliver",
})
class DeliverOrder {
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

// close order
@endpoint({
  method: "POST",
  path: "/orders/:id/events/close",
})
class CloseOrder {
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

// archive order
@endpoint({
  method: "POST",
  path: "/orders/:id/events/archive",
})
class ArchiveOrder {
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
