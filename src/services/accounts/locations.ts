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

import { Location, LocationRequest } from "../../schema/locations"

@api({
  name: "Location API",
  version: "1.0.0",
})
class ManageLocationApi {
  @securityHeader
  "Authorization": String
}

// get locations
@endpoint({
  method: "GET",
  path: "/accounts/:account/locations",
})
class ManageListLocations {
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
  path: "/accounts/:account/locations",
})
class ManageCreateLocation {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
    },

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
  path: "/accounts/:account/locations/:id",
})
class ManageGetLocation {
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
    body: Location,
  ) {}
}

// update location
@endpoint({
  method: "PATCH",
  path: "/accounts/:account/locations/:id",
})
class ManagePatchLocation {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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
  path: "/accounts/:account/locations/:id",
})
class ManageDeleteLocation {
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
