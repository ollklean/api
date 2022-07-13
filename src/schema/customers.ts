import {
  DateTime,
  Int64,
  String,
} from "@airtasker/spot"

import { Images, Contacts } from "./common"

interface CustomerNames {
  ar: String
  en: String
}

interface CustomerAttributes {
  tags: String[]
}

export interface Customer {
  id: Int64
  names: CustomerNames
  attributes: CustomerAttributes
  images: Images
  contacts: Contacts
  is_active: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

export interface CustomerRequest {
  names: CustomerNames
  attributes: CustomerAttributes
  images: Images
  contacts: Contacts
}

export interface CustomerHeader {
  id: Int64
  names: CustomerNames
}
