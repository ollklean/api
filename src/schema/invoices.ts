import {
  DateTime,
  Int64,
  Integer,
  Number,
  String,
} from "@airtasker/spot"

import { Discount } from "./common"
import { CustomerHeader } from "./customers"
import { ItemHeader } from "./items"
import { LocationHeader } from "./locations"
import { OrderHeader } from "./orders"

interface InvoiceLine {
  id: Int64
  location: LocationHeader
  item: ItemHeader
  quantity: Integer
  rate: Number
  discounts: Discount[]
}

export interface Invoice {
  id: Int64
  customer: CustomerHeader
  order: OrderHeader
  invoiced_at: DateTime
  fulfilled_at: DateTime
  lines: InvoiceLine[]
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

export interface InvoiceRequest {
  order: OrderHeader
  invoiced_at: DateTime
  notes: String[]
}

export interface InvoiceEvent {
  notes: String[]
}

export interface InvoiceHeader {
  id: Int64
}
