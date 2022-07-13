import {
  DateTime,
  Int64,
  Integer,
  Number,
  String,
} from "@airtasker/spot"

import { Descriptions, Discount, Voucher } from "./common"
import { ItemHeader } from "./items"
import { LocationHeader } from "./locations"

interface PromotionItem {
  id: Int64
  item: ItemHeader
  quantity: Integer
  rate: Number
  discounts: Discount[]
}

export interface Promotion {
  id: Int64
  location?: LocationHeader
  descriptions: Descriptions
  start_at: DateTime
  end_at: DateTime
  items: PromotionItem[]
  vouchers: Voucher[]
  notes: String[]
  status: String
  is_open: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

interface PromotionItemRequest {
  item: ItemHeader
  quantity: Integer
  rate: Number
  discounts: Discount[]
}

export interface PromotionRequest {
  descriptions: Descriptions
  start_at: DateTime
  end_at: DateTime
  items: PromotionItemRequest[]
  vouchers: Voucher[]
  notes: String[]
}

interface PromotionItemUpdate {
  id: Int64
  item: ItemHeader
  quantity: Integer
  rate: Number
  discounts: Discount[]
}

export interface PromotionUpdate {
  descriptions: Descriptions
  start_at: DateTime
  end_at: DateTime
  items: PromotionItemUpdate[]
  vouchers: Voucher[]
  notes: String[]
}

export interface PromotionEvent {
  notes: String[]
}

export interface PromotionHeader {
  id: Int64
}
