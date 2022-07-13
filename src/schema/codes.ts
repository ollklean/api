import {
  DateTime,
  Int64,
  String,
} from "@airtasker/spot"

export interface Code {
  id: Int64
  kind: String
  code: String
  description: String
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

export interface CodeRequest {
  code: String
  description: String
}
