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

import { Chain, ChainRequest } from "../../schema/chains"

@api({
  name: "Chain API",
  version: "1.0.0",
})
class ManageChainApi {
  @securityHeader
  "Authorization": String
}

// get chains
@endpoint({
  method: "GET",
  path: "/accounts/:account/chains",
})
class ManageListChains {
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
    body: Chain[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// get chain
@endpoint({
  method: "GET",
  path: "/accounts/:account/chains/:id",
})
class ManageGetChain {
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
    body: Chain,
  ) {}
}

// update chain
@endpoint({
  method: "PATCH",
  path: "/accounts/:account/chains/:id",
})
class ManagePatchChain {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
    },

    @body
    body: ChainRequest
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Chain,
  ) {}
}
