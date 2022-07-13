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

import { Chain, ChainRequest } from "../schema/chains"

@api({
  name: "Chain API",
  version: "1.0.0",
})
class ChainApi {
  @securityHeader
  "Authorization": String
}

// get chains
@endpoint({
  method: "GET",
  path: "/chains",
})
class ListChains {
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
    body: Chain[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// create chain
@endpoint({
  method: "POST",
  path: "/chains",
})
class CreateChain {
  @request
  request(
    @body
    body: ChainRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Chain
  ) {}
}

// get chain
@endpoint({
  method: "GET",
  path: "/chains/:id",
})
class GetChain {
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
    body: Chain,
  ) {}
}

// update chain
@endpoint({
  method: "PATCH",
  path: "/chains/:id",
})
class PatchChain {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
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

// delete chain
@endpoint({
  method: "DELETE",
  path: "/chains/:id",
})
class DeleteChain {
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
