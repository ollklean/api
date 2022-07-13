import {
  DateTime,
  Int64,
  Number,
  String,
} from "@airtasker/spot"

import { Rates } from "./common"
import { ItemHeader } from "./items"
import { LocationHeader } from "./locations"

export interface Inventory {
  id: Int64
  item: ItemHeader
  location: LocationHeader
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
