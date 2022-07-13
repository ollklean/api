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

import { Payment } from "../../schema/payments"

@api({
  name: "My Payment API",
  version: "1.0.0",
})
class MyPaymentApi {
  @securityHeader
  "Authorization": String
}

// get my payments
@endpoint({
  method: "GET",
  path: "/my/payments",
})
class ListMyPayments {
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

// get my payment
@endpoint({
  method: "GET",
  path: "/my/payments/:id",
})
class GetMyPayment {
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
