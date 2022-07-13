import {
  DateTime,
  Int64,
  String,
} from "@airtasker/spot"

import { Names, Descriptions, Images } from "./common"

interface CategoryAttributes {
  tags: String[]
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
  attributes: CategoryAttributes
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
  attributes: CategoryAttributes
  images: Images
}

export interface CategoryHeader {
  id: Int64
  names: Names
}
