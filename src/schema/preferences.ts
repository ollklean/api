import {
  DateTime,
  Int64,
  String,
} from "@airtasker/spot"

interface PreferencesNotifications {
  marketing: boolean
  order: boolean
  progress: boolean
  invoice: boolean
  announcements: boolean
  reminders: boolean
}

interface PreferencesAttributes {
  language: string
  timezone: string
  notifications: PreferencesNotifications
  tags: String[]
}

export interface Preferences {
  id: Int64
  attributes: PreferencesAttributes
  created_by: string
  updated_by: string
  created_at: DateTime
  updated_at: DateTime
}

export interface PreferencesRequest {
  attributes: PreferencesAttributes
}
