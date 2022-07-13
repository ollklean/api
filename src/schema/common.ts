import {
  Number,
  String,
} from "@airtasker/spot"

export interface Names {
  ar: String
  en: String
}

export interface Descriptions {
  ar: String
  en: String
}

export interface Images {
  default: String
  thumbnail: String
}

export interface Address {
  label: String
  line_1: String
  line_2: String
  line_3: String
  area: String
  city: String
  region: String
  state: String
  country: String
  postal_code: String
  postal_box: String
  is_default: boolean
}

export interface Emails {
  label: String
  email: String
  is_default: boolean
}

export interface Phones {
  label: String
  phone: String
  is_default: boolean
}

export interface Contacts {
  addresses: Address[]
  emails: Emails[]
  phones: Phones[]
}

export interface Rates {
  default: Number
}

export interface Discount {
  code: String
  percent: Number
}

export interface Promotion {
  code: String
  percent: Number
}

export interface Voucher {
  code: String
}
