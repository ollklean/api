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

import { Payment, PaymentRequest, PaymentEvent } from "../schema/payments"

@api({
  name: "Payment API",
  version: "1.0.0",
})
class PaymentApi {
  @securityHeader
  "Authorization": String
}

// get payments
@endpoint({
  method: "GET",
  path: "/payments",
})
class ListPayments {
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
    body: Payment[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// create payment
@endpoint({
  method: "POST",
  path: "/payments",
})
class CreatePayment {
  @request
  request(
    @body
    body: PaymentRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Payment
  ) {}
}

// get payment
@endpoint({
  method: "GET",
  path: "/payments/:id",
})
class GetPayment {
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
    body: Payment,
  ) {}
}

// reverse payment
@endpoint({
  method: "POST",
  path: "/payments/:id/events/reverse",
})
class PayPayment {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: PaymentEvent
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Payment,
  ) {}
}
