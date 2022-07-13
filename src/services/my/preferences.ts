import {
  api,
  body,
  endpoint,
  headers,
  queryParams,
  request,
  response,
  securityHeader,
  Integer,
  String,
} from "@airtasker/spot"

import { Preferences, PreferencesRequest } from "../../schema/preferences"

@api({
  name: "Preferences API",
  version: "1.0.0",
})
class PreferencesApi {
  @securityHeader
  "Authorization": String
}

// get preferences
@endpoint({
  method: "GET",
  path: "/my/preferences",
})
class GetPreferences {
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
    body: Preferences[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// update preferences
@endpoint({
  method: "PATCH",
  path: "/my/preferences",
})
class UpdatePreferences {
  @request
  request(
    @body
    body: PreferencesRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Preferences
  ) {}
}
