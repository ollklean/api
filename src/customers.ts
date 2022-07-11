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

// update customers
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

// models
interface Names {
  ar: String
  en: String
}

interface Descriptions {
  ar: String
  en: String
}

interface Attributes {
  tags: String[]
}

interface Images {
  default: String
  thumbnail: String
}

interface Address {
  label: String
  line_1: String
  line_2: String
  line_3: String
  area: String
  city: String
  region: String
  state: String
  country: String
  postal_code: String
  postal_box: String
  is_default: boolean
}

interface Emails {
  label: String
  email: String
  is_default: boolean
}

interface Phones {
  label: String
  phone: String
  is_default: boolean
}

interface Contacts {
  addresses: Address[]
  emails: Emails[]
  phones: Phones[]
}

interface Customer {
  id: Int64
  names: Names
  attributes: Attributes
  images: Images
  contacts: Contacts
  is_active: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

interface CustomerRequest {
  names: Names
  attributes: Attributes
  images: Images
  contacts: Contacts
}
