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

interface ItemCategory {
  id: Int64
  names: Names
}

interface LocationChain {
  id: Int64
  names: Names
}

interface Rates {
  default: Number
}

interface InventoryItem {
  id: Int64
  names: Names
  category: ItemCategory
}

interface InventoryLocation {
  id: Int64
  names: Names
  chain: LocationChain
}

export interface Inventory {
  id: Int64
  item: InventoryItem
  location: InventoryLocation
  rates: Rates
  quantity: Number
  uom: String
  is_available: boolean
  is_promoted: boolean
  is_active: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

export interface InventoryRequest {
  rates: Rates
  quantity: Number
  uom: String
}

export interface InventoryUpdate {
  quantity: Number
  uom: String
}
