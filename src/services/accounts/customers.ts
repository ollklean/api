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

import { Customer, CustomerRequest } from "../../schema/customers"

@api({
  name: "Customer API",
  version: "1.0.0",
})
class ManageCustomerApi {
  @securityHeader
  "Authorization": String
}

// get customers
@endpoint({
  method: "GET",
  path: "/accounts/:account/customers",
})
class ManageListCustomers {
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
  path: "/accounts/:account/customers",
})
class ManageCreateCustomer {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
    },

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
  path: "/accounts/:account/customers/:id",
})
class ManageGetCustomer {
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
    body: Customer,
  ) {}
}

// update customer
@endpoint({
  method: "PATCH",
  path: "/accounts/:account/customers/:id",
})
class ManagePatchCustomer {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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
  path: "/accounts/:account/customers/:id",
})
class ManageDeleteCustomer {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
    },
  ) {}

  @response({ status: 204 })
  response() {}
}
