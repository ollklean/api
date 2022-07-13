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

import { Location, LocationRequest } from "../schema/locations"

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

// update location
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
