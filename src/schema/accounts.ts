import {
  DateTime,
  Int64,
  String,
} from "@airtasker/spot"

import { Images, Contacts } from "./common"

interface AccountNames {
  ar: String
  en: String
}

interface AccountAttributes {
  tags: String[]
}

interface AccountTerms {
  default: String
}

export interface Account {
  id: Int64
  code: String
  names: AccountNames
  attributes: AccountAttributes
  images: Images
  contacts: Contacts
  terms: AccountTerms
  status: String
  notes: String[]
  is_active: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

export interface AccountRequest {
  names: AccountNames
  attributes: AccountAttributes
  images: Images
  contacts: Contacts
}

export interface AccountEvent {
  notes: String[]
}

export interface AccountHeader {
  id: Int64
  code: String
  names: AccountNames
}
