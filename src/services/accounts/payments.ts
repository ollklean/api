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

import { Payment, PaymentRequest, PaymentEvent } from "../../schema/payments"

@api({
  name: "Payment API",
  version: "1.0.0",
})
class ManagePaymentApi {
  @securityHeader
  "Authorization": String
}

// get payments
@endpoint({
  method: "GET",
  path: "/accounts/:account/payments",
})
class ManageListPayments {
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
  path: "/accounts/:account/payments",
})
class ManageCreatePayment {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
    },

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
  path: "/accounts/:account/payments/:id",
})
class ManageGetPayment {
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
    body: Payment,
  ) {}
}

// reverse payment
@endpoint({
  method: "POST",
  path: "/accounts/:account/payments/:id/events/reverse",
})
class ManagePayPayment {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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
