import {
  DateTime,
  Int64,
  String,
} from "@airtasker/spot"

import { Names, Descriptions, Images } from "./common"

interface ChainAttributes {
  tags: String[]
}

interface ChainParent {
  id: Int64
  names: Names
}

export interface Chain {
  id: Int64
  parent?: ChainParent
  names: Names
  descriptions: Descriptions
  attributes: ChainAttributes
  images: Images
  is_active: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

export interface ChainRequest {
  parent?: ChainParent
  names: Names
  descriptions: Descriptions
  attributes: ChainAttributes
  images: Images
}

export interface ChainHeader {
  id: Int64
  names: Names
}
