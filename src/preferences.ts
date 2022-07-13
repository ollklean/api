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
} from "@airtasker/spot"

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

// models
interface PreferencesNotifications {
  marketing: boolean
  order: boolean
  progress: boolean
  invoice: boolean
  announcements: boolean
  reminders: boolean
}

interface PreferencesAttributes {
  language: string
  timezone: string
  notifications: PreferencesNotifications
  tags: String[]
}

interface Preferences {
  id: Int64
  attributes: PreferencesAttributes
  created_by: string
  updated_by: string
  created_at: DateTime
  updated_at: DateTime
}

interface PreferencesRequest {
  attributes: PreferencesAttributes
}
