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

import { Account, AccountRequest, AccountEvent } from "../schema/accounts"

@api({
  name: "Account API",
  version: "1.0.0",
})
class AccountApi {
  @securityHeader
  "Authorization": String
}

// get accounts
@endpoint({
  method: "GET",
  path: "/accounts",
})
class ListAccounts {
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
    body: Account[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// create account
@endpoint({
  method: "POST",
  path: "/accounts",
})
class CreateAccount {
  @request
  request(
    @body
    body: AccountRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Account
  ) {}
}

// get account
@endpoint({
  method: "GET",
  path: "/accounts/:id",
})
class GetAccount {
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
    body: Account,
  ) {}
}
