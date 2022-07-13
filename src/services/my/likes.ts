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

import { Like, LikeRequest } from "../../schema/likes"

@api({
  name: "Like API",
  version: "1.0.0",
})
class LikeApi {
  @securityHeader
  "Authorization": String
}

// get likes
@endpoint({
  method: "GET",
  path: "/my/likes",
})
class ListLikes {
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
    body: Like[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// create like
@endpoint({
  method: "POST",
  path: "/my/likes",
})
class CreateLike {
  @request
  request(
    @body
    body: LikeRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Like
  ) {}
}

// get like
@endpoint({
  method: "GET",
  path: "/my/likes/:id",
})
class GetLike {
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
    body: Like,
  ) {}
}

// delete like
@endpoint({
  method: "DELETE",
  path: "/my/likes/:id",
})
class DeleteLike {
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
