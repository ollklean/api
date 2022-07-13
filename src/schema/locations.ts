import {
  DateTime,
  Int64,
  String,
} from "@airtasker/spot"

interface Names {
  ar: String
  en: String
}

interface Descriptions {
  ar: String
  en: String
}

interface Attributes {
  tags: String[]
}

interface Images {
  default: String
  thumbnail: String
}

interface Address {
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

interface Emails {
  label: String
  email: String
  is_default: boolean
}

interface Phones {
  label: String
  phone: String
  is_default: boolean
}

interface Contacts {
  addresses: Address[]
  emails: Emails[]
  phones: Phones[]
}

interface LocationChain {
  id: Int64
  names: Names
}

export interface Location {
  id: Int64
  chain: LocationChain
  names: Names
  descriptions: Descriptions
  attributes: Attributes
  images: Images
  contacts: Contacts
  is_active: boolean
  is_archived: boolean
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

export interface LocationRequest {
  chain: LocationChain
  names: Names
  descriptions: Descriptions
  attributes: Attributes
  images: Images
  contacts: Contacts
}
