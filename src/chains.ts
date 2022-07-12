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

// update chains
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

interface ChainParent {
  id: Int64
  names: Names
}

interface Chain {
  id: Int64
  parent?: ChainParent
  names: Names
  descriptions: Descriptions
  attributes: Attributes
  images: Images
  is_active: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

interface ChainRequest {
  parent?: ChainParent
  names: Names
  descriptions: Descriptions
  attributes: Attributes
  images: Images
}
