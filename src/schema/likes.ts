import {
  DateTime,
  Int64,
  String,
} from "@airtasker/spot"

interface Likeable {
  id: Int64
  kind: String
}

export interface Like {
  id: Int64
  likeable: Likeable
  created_by: string
  updated_by: string
  created_at: DateTime
  updated_at: DateTime
}

export interface LikeRequest {
  likeable: Likeable
}
