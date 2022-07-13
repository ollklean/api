import {
  DateTime,
  Int64,
  Number,
  String,
} from "@airtasker/spot"

import { Names, Descriptions, Images, Rates } from "./common"
import { CategoryHeader } from "./categories"

interface ItemAttributes {
  tags: String[]
}

export interface Item {
  id: Int64
  category: CategoryHeader
  names: Names
  descriptions: Descriptions
  attributes: ItemAttributes
  images: Images
  rates: Rates
  is_active: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

export interface ItemRequest {
  category: CategoryHeader
  names: Names
  descriptions: Descriptions
  attributes: ItemAttributes
  images: Images
  rates: Rates
}

export interface ItemHeader {
  id: Int64
  names: Names
  category: CategoryHeader
}
