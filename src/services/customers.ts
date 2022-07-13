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

import { Customer, CustomerRequest } from "../schema/customers"

@api({
  name: "Customer API",
  version: "1.0.0",
})
class CustomerApi {
  @securityHeader
  "Authorization": String
}

// get customers
@endpoint({
  method: "GET",
  path: "/customers",
})
class ListCustomers {
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
    body: Customer[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// create customer
@endpoint({
  method: "POST",
  path: "/customers",
})
class CreateCustomer {
  @request
  request(
    @body
    body: CustomerRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Customer
  ) {}
}

// get customer
@endpoint({
  method: "GET",
  path: "/customers/:id",
})
class GetCustomer {
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
    body: Customer,
  ) {}
}

// update customer
@endpoint({
  method: "PATCH",
  path: "/customers/:id",
})
class PatchCustomer {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: CustomerRequest
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Customer,
  ) {}
}

// delete customer
@endpoint({
  method: "DELETE",
  path: "/customers/:id",
})
class DeleteCustomer {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },
  ) {}

  @response({ status: 204 })
  response() {}
}
