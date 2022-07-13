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

import { Invoice, InvoiceRequest, InvoiceEvent } from "../../schema/invoices"

@api({
  name: "Invoice API",
  version: "1.0.0",
})
class ManageInvoiceApi {
  @securityHeader
  "Authorization": String
}

// get invoices
@endpoint({
  method: "GET",
  path: "/accounts/:account/invoices",
})
class ManageListInvoices {
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
  path: "/accounts/:account/invoices",
})
class ManageCreateInvoice {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
    },

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
  path: "/accounts/:account/invoices/:id",
})
class ManageGetInvoice {
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
    body: Invoice,
  ) {}
}

// update invoice
@endpoint({
  method: "PATCH",
  path: "/accounts/:account/invoices/:id",
})
class ManagePatchInvoice {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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
  path: "/accounts/:account/invoices/:id/events/cancel",
})
class ManageCancelInvoice {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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
  path: "/accounts/:account/invoices/:id/events/pay",
})
class ManagePayInvoice {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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
  path: "/accounts/:account/invoices/:id/events/close",
})
class ManageCloseInvoice {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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
  path: "/accounts/:account/invoices/:id/events/archive",
})
class ManageArchiveInvoice {
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
    body: Invoice,
  ) {}
}
