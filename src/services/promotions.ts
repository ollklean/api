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

import { Promotion, PromotionRequest, PromotionUpdate, PromotionEvent } from "../schema/promotions"

@api({
  name: "Promotion API",
  version: "1.0.0",
})
class PromotionApi {
  @securityHeader
  "Authorization": String
}

// get promotions
@endpoint({
  method: "GET",
  path: "/promotions",
})
class ListPromotions {
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
    body: Promotion[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// create promotion
@endpoint({
  method: "POST",
  path: "/promotions",
})
class CreatePromotion {
  @request
  request(
    @body
    body: PromotionRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Promotion
  ) {}
}

// get promotion
@endpoint({
  method: "GET",
  path: "/promotions/:id",
})
class GetPromotion {
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
    body: Promotion,
  ) {}
}

// update promotion
@endpoint({
  method: "PATCH",
  path: "/promotions/:id",
})
class PatchPromotion {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: PromotionUpdate
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Promotion,
  ) {}
}

// approve promotion
@endpoint({
  method: "POST",
  path: "/promotions/:id/events/approve",
})
class ApprovePromotion {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: PromotionUpdate
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Promotion,
  ) {}
}

// cancel promotion
@endpoint({
  method: "POST",
  path: "/promotions/:id/events/cancel",
})
class CancelPromotion {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: PromotionEvent
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Promotion,
  ) {}
}

// stop promotion
@endpoint({
  method: "POST",
  path: "/promotions/:id/events/stop",
})
class StopPromotion {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: PromotionEvent
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Promotion,
  ) {}
}

// archive promotion
@endpoint({
  method: "POST",
  path: "/promotions/:id/events/archive",
})
class ArchivePromotion {
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
    body: Promotion,
  ) {}
}
