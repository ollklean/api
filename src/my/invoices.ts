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
  name: "My Invoice API",
  version: "1.0.0",
})
class MyInvoiceApi {
  @securityHeader
  "Authorization": String
}

// get my invoices
@endpoint({
  method: "GET",
  path: "/my/invoices",
})
class ListMyInvoices {
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
    body: Invoice[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// get my invoice
@endpoint({
  method: "GET",
  path: "/my/invoices/:id",
})
class GetMyInvoice {
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
    body: Invoice,
  ) {}
}

// pay my invoice
@endpoint({
  method: "POST",
  path: "/my/invoices/:id/events/pay",
})
class PayMyInvoice {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: InvoiceEvent
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Invoice,
  ) {}
}

// models
interface Names {
  ar: String
  en: String
}

interface Discount {
  code: String
  percent: Number
}

interface InvoiceOrder {
  id: Int64
}

interface InvoiceCustomer {
  id: Int64
  names: Names
}

interface InvoiceItem {
  id: Int64
  names: Names
}

interface InvoiceLocation {
  id: Int64
  names: Names
}

interface InvoiceLine {
  id: Int64
  location: InvoiceLocation
  item: InvoiceItem
  quantity: Integer
  rate: Number
  discounts: Discount[]
}

interface Invoice {
  id: Int64
  customer: InvoiceCustomer
  order: InvoiceOrder
  invoiced_at: DateTime
  fulfilled_at: DateTime
  lines: InvoiceLine[]
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

interface InvoiceEvent {
  notes: String[]
}
