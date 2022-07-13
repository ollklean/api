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

// models
interface Names {
  ar: String
  en: String
}

interface PaymentInvoice {
  id: Int64
}

interface PaymentCustomer {
  id: Int64
  names: Names
}

interface PaymentAttributes {
  tags: String[]
}

interface PaymentLine {
  id: Int64
  channel: String
  amount: Number
  reference: String
  attributes: PaymentAttributes
}

interface Payment {
  id: Int64
  customer: PaymentCustomer
  invoice: PaymentInvoice
  paid_at: DateTime
  lines: PaymentLine[]
  amount: Number
  status: String
  notes: String[]
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}
