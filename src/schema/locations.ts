import {
  DateTime,
  Int64,
  String,
} from "@airtasker/spot"

import { Names, Descriptions, Contacts, Images } from "./common"
import { ChainHeader } from "./chains"

interface LocationAttributes {
  tags: String[]
}

interface LocationChain {
  id: Int64
  names: Names
}

export interface Location {
  id: Int64
  chain: LocationChain
  names: Names
  descriptions: Descriptions
  attributes: LocationAttributes
  images: Images
  contacts: Contacts
  is_active: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

export interface LocationRequest {
  chain: LocationChain
  names: Names
  descriptions: Descriptions
  attributes: LocationAttributes
  images: Images
  contacts: Contacts
}

export interface LocationHeader {
  id: Int64
  names: Names
  chain: ChainHeader
}
