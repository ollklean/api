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
  name: "Location API",
  version: "1.0.0",
})
class LocationApi {
  @securityHeader
  "Authorization": String
}

// get locations
@endpoint({
  method: "GET",
  path: "/locations",
})
class ListLocations {
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
    body: Location[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// create location
@endpoint({
  method: "POST",
  path: "/locations",
})
class CreateLocation {
  @request
  request(
    @body
    body: LocationRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Location
  ) {}
}

// get location
@endpoint({
  method: "GET",
  path: "/locations/:id",
})
class GetLocation {
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
    body: Location,
  ) {}
}

// update locations
@endpoint({
  method: "PATCH",
  path: "/locations/:id",
})
class PatchLocation {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: LocationRequest
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Location,
  ) {}
}

// delete location
@endpoint({
  method: "DELETE",
  path: "/locations/:id",
})
class DeleteLocation {
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
}

interface Emails {
  primary: String
  alternate: String[]
}

interface Phones {
  primary: String
  alternate: String[]
}

interface Contact {
  address: Address
  emails: Emails
  phones: Phones
}

interface Location {
  id: Int64
  chain_id: Int64
  names: Names
  descriptions: Descriptions
  attributes: Attributes
  images: Images
  contacts: Contact
  is_active: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

interface LocationRequest {
  chain_id: Int64
  names: Names
  descriptions: Descriptions
  attributes: Attributes
  images: Images
  contacts: Contact
}
