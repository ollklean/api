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

import { Bookmark, BookmarkRequest } from "../../schema/bookmarks"

@api({
  name: "Bookmark API",
  version: "1.0.0",
})
class BookmarkApi {
  @securityHeader
  "Authorization": String
}

// get bookmarks
@endpoint({
  method: "GET",
  path: "/my/bookmarks",
})
class ListBookmarks {
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
    body: Bookmark[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// create bookmark
@endpoint({
  method: "POST",
  path: "/my/bookmarks",
})
class CreateBookmark {
  @request
  request(
    @body
    body: BookmarkRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Bookmark
  ) {}
}

// get bookmark
@endpoint({
  method: "GET",
  path: "/my/bookmarks/:id",
})
class GetBookmark {
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
    body: Bookmark,
  ) {}
}

// delete bookmark
@endpoint({
  method: "DELETE",
  path: "/my/bookmarks/:id",
})
class DeleteBookmark {
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
