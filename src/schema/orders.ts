import {
  DateTime,
  Int64,
  Integer,
  Number,
  String,
} from "@airtasker/spot"

interface Names {
  ar: String
  en: String
}

interface Promises {
  processed_at: DateTime
  expected_at: DateTime
}

interface Voucher {
  code: String
}

interface Promotion {
  code: String
  percent: Number
}

interface Discount {
  code: String
  percent: Number
}

interface OrderCustomer {
  id: Int64
  names: Names
}

interface OrderItem {
  id: Int64
  names: Names
}

interface OrderLocation {
  id: Int64
  names: Names
}

interface OrderLine {
  id: Int64
  location: OrderLocation
  item: OrderItem
  quantity: Integer
  rate: Number
  promotions: Promotion[]
  discounts: Discount[]
  instructions: String[]
}

export interface Order {
  id: Int64
  customer: OrderCustomer
  ordered_at: DateTime
  fulfilled_at: DateTime
  promises: Promises
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
  location: OrderLocation
  item: OrderItem
  quantity: Integer
  rate: Number
  instructions: String[]
}

export interface OrderRequest {
  customer: OrderCustomer
  ordered_at: DateTime
  promises: Promises
  lines: OrderLineRequest[]
  vouchers: Voucher[]
  notes: String[]
}

interface OrderLineUpdate {
  quantity: Integer
  rate: Number
  instructions: String[]
}

export interface OrderUpdate {
  promises: Promises
  lines: OrderLineUpdate[]
  vouchers: Voucher[]
  notes: String[]
}

interface OrderLineEvent {
  instructions: String[]
}

export interface OrderEvent {
  lines: OrderLineEvent[]
  notes: String[]
}
