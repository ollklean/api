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

import { Invoice, InvoiceRequest, InvoiceEvent } from "../schema/invoices"

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

// pay invoice
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
