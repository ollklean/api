import {
  api,
  securityHeader,
  String,
} from "@airtasker/spot"

@api({
  name: "Ollklean API",
  version: "1.0.0",
})
class Api {
  @securityHeader
  "Authorization": String
}
