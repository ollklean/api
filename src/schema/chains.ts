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

interface ChainParent {
  id: Int64
  names: Names
}

export interface Chain {
  id: Int64
  parent?: ChainParent
  names: Names
  descriptions: Descriptions
  attributes: Attributes
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
  attributes: Attributes
  images: Images
}
