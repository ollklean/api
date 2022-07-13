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

import { Account, AccountRequest, AccountEvent } from "../../schema/accounts"

@api({
  name: "Manage Account API",
  version: "1.0.0",
})
class ManageAccountApi {
  @securityHeader
  "Authorization": String
}

// get accounts
@endpoint({
  method: "GET",
  path: "/manage/accounts",
})
class ManageListAccounts {
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
  path: "/manage/accounts",
})
class ManageCreateAccount {
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
  path: "/manage/accounts/:id",
})
class ManageGetAccount {
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

// update account
@endpoint({
  method: "PATCH",
  path: "/manage/accounts/:id",
})
class ManagePatchAccount {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: AccountRequest
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Account,
  ) {}
}

// approve account
@endpoint({
  method: "POST",
  path: "/manage/accounts/:id/events/approve",
})
class ManageApproveAccount {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: AccountEvent
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Account,
  ) {}
}

// reject account
@endpoint({
  method: "POST",
  path: "/manage/accounts/:id/events/reject",
})
class ManageRejectAccount {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: AccountEvent
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Account,
  ) {}
}

// archive account
@endpoint({
  method: "POST",
  path: "/manage/accounts/:id/events/archive",
})
class ManageArchiveAccount {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: AccountEvent
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Account,
  ) {}
}

// delete account
@endpoint({
  method: "DELETE",
  path: "/manage/accounts/:id",
})
class ManageDeleteAccount {
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
