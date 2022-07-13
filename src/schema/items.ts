import {
  DateTime,
  Int64,
  Number,
  String,
} from "@airtasker/spot"

interface Names {
  ar: String
  en: String
}

interface Descriptions {
  ar: String
  en: String
}

interface Attributes {
  tags: String[]
}

interface Images {
  default: String
  thumbnail: String
}

interface Rates {
  default: Number
}

interface ItemCategory {
  id: Int64
  names: Names
}

export interface Item {
  id: Int64
  category: ItemCategory
  names: Names
  descriptions: Descriptions
  attributes: Attributes
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
  category: ItemCategory
  names: Names
  descriptions: Descriptions
  attributes: Attributes
  images: Images
  rates: Rates
}
