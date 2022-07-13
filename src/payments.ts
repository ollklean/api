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

interface PaymentRequest {
  customer: PaymentCustomer
  invoice: PaymentInvoice
  paid_at: DateTime
  lines: PaymentLine[]
  notes: String[]
}

interface PaymentEvent {
  notes: String[]
}
