import {
  DateTime,
  Int64,
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

interface CategoryParent {
  id: Int64
  names: Names
}

export interface Category {
  id: Int64
  parent?: CategoryParent
  names: Names
  descriptions: Descriptions
  attributes: Attributes
  images: Images
  created_by: string
  updated_by: string
  created_at: DateTime
  updated_at: DateTime
}

export interface CategoryRequest {
  parent?: CategoryParent
  names: Names
  descriptions: Descriptions
  attributes: Attributes
  images: Images
}
