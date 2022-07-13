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

interface Discount {
  code: String
  percent: Number
}

interface InvoiceOrder {
  id: Int64
}

interface InvoiceCustomer {
  id: Int64
  names: Names
}

interface InvoiceItem {
  id: Int64
  names: Names
}

interface InvoiceLocation {
  id: Int64
  names: Names
}

interface InvoiceLine {
  id: Int64
  location: InvoiceLocation
  item: InvoiceItem
  quantity: Integer
  rate: Number
  discounts: Discount[]
}

export interface Invoice {
  id: Int64
  customer: InvoiceCustomer
  order: InvoiceOrder
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
  order: InvoiceOrder
  invoiced_at: DateTime
  notes: String[]
}

export interface InvoiceEvent {
  notes: String[]
}
