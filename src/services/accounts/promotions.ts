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

import { Promotion, PromotionRequest, PromotionUpdate, PromotionEvent } from "../../schema/promotions"

@api({
  name: "Manage Promotion API",
  version: "1.0.0",
})
class ManagePromotionApi {
  @securityHeader
  "Authorization": String
}

// get promotions
@endpoint({
  method: "GET",
  path: "/accounts/:account/promotions",
})
class ManageListPromotions {
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
  path: "/accounts/:account/promotions",
})
class ManageCreatePromotion {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
    },

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
  path: "/accounts/:account/promotions/:id",
})
class ManageetPromotion {
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
    body: Promotion,
  ) {}
}

// update promotion
@endpoint({
  method: "PATCH",
  path: "/accounts/:account/promotions/:id",
})
class ManagePatchPromotion {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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
  path: "/accounts/:account/promotions/:id/events/approve",
})
class ManageApprovePromotion {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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
  path: "/accounts/:account/promotions/:id/events/cancel",
})
class ManageCancelPromotion {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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
  path: "/accounts/:account/promotions/:id/events/stop",
})
class ManageStopPromotion {
  @request
  request(
    @pathParams
    pathParams: {
      account: Int64,
      id: Int64,
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
  path: "/accounts/:account/promotions/:id/events/archive",
})
class ManageArchivePromotion {
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
    body: Promotion,
  ) {}
}
