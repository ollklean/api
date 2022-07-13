import {
  DateTime,
  Int64,
  Number,
  String,
} from "@airtasker/spot"

import { CustomerHeader } from "./customers"
import { InvoiceHeader } from "./invoices"

interface PaymentAttributes {
  tags: String[]
}

interface PaymentLine {
  id: Int64
  channel: String
  amount: Number
  reference: String
  attributes: PaymentAttributes
}

export interface Payment {
  id: Int64
  customer: CustomerHeader
  invoice: InvoiceHeader
  paid_at: DateTime
  lines: PaymentLine[]
  amount: Number
  status: String
  notes: String[]
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

export interface PaymentRequest {
  customer: CustomerHeader
  invoice: InvoiceHeader
  paid_at: DateTime
  lines: PaymentLine[]
  notes: String[]
}

export interface PaymentEvent {
  notes: String[]
}
