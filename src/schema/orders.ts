import {
  DateTime,
  Int64,
  Integer,
  Number,
  String,
} from "@airtasker/spot"

import { Discount, Promotion, Voucher } from "./common"
import { CustomerHeader } from "./customers"
import { ItemHeader } from "./items"
import { LocationHeader } from "./locations"

interface OrderPromises {
  processed_at: DateTime
  expected_at: DateTime
}

interface OrderLine {
  id: Int64
  location: LocationHeader
  item: ItemHeader
  quantity: Integer
  rate: Number
  promotions: Promotion[]
  discounts: Discount[]
  instructions: String[]
}

export interface Order {
  id: Int64
  customer: CustomerHeader
  ordered_at: DateTime
  fulfilled_at: DateTime
  promises: OrderPromises
  lines: OrderLine[]
  vouchers: Voucher[]
  promotions: Promotion[]
  discounts: Discount[]
  amount: Number
  status: String
  notes: String[]
  is_open: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

interface OrderLineRequest {
  location: LocationHeader
  item: ItemHeader
  quantity: Integer
  rate: Number
  instructions: String[]
}

export interface OrderRequest {
  customer: CustomerHeader
  ordered_at: DateTime
  promises: OrderPromises
  lines: OrderLineRequest[]
  vouchers: Voucher[]
  notes: String[]
}

interface OrderLineUpdate {
  id: Int64
  quantity: Integer
  rate: Number
  instructions: String[]
}

export interface OrderUpdate {
  promises: OrderPromises
  lines: OrderLineUpdate[]
  vouchers: Voucher[]
  notes: String[]
}

interface OrderLineEvent {
  id: Int64
  instructions: String[]
}

export interface OrderEvent {
  lines: OrderLineEvent[]
  notes: String[]
}

export interface OrderHeader {
  id: Int64
}
