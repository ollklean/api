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

import { Invoice, InvoiceEvent } from "../../schema/invoices"

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
