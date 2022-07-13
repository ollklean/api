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
  name: "Invoice API",
  version: "1.0.0",
})
class InvoiceApi {
  @securityHeader
  "Authorization": String
}

// get invoices
@endpoint({
  method: "GET",
  path: "/invoices",
})
class ListInvoices {
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

// create invoice
@endpoint({
  method: "POST",
  path: "/invoices",
})
class CreateInvoice {
  @request
  request(
    @body
    body: InvoiceRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Invoice
  ) {}
}

// get invoice
@endpoint({
  method: "GET",
  path: "/invoices/:id",
})
class GetInvoice {
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

// update invoice
@endpoint({
  method: "PATCH",
  path: "/invoices/:id",
})
class PatchInvoice {
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

// cancel invoice
@endpoint({
  method: "POST",
  path: "/invoices/:id/events/cancel",
})
class CancelInvoice {
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

// cancel invoice
@endpoint({
  method: "POST",
  path: "/invoices/:id/events/pay",
})
class PayInvoice {
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

// close invoice
@endpoint({
  method: "POST",
  path: "/invoices/:id/events/close",
})
class CloseInvoice {
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

// archive invoice
@endpoint({
  method: "POST",
  path: "/invoices/:id/events/archive",
})
class ArchiveInvoice {
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

interface InvoiceRequest {
  order: InvoiceOrder
  invoiced_at: DateTime
  notes: String[]
}

interface InvoiceEvent {
  notes: String[]
}
