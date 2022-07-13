import {
  DateTime,
  Int64,
  String,
} from "@airtasker/spot"

interface Bookmarkable {
  id: Int64
  kind: String
}

export interface Bookmark {
  id: Int64
  bookmarkable: Bookmarkable
  created_by: string
  updated_by: string
  created_at: DateTime
  updated_at: DateTime
}

export interface BookmarkRequest {
  bookmarkable: Bookmarkable
}
