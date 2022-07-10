import { Spot } from "@airtasker/spot"
import { merge, isErrorResult } from 'openapi-merge'
import { writeFileSync } from 'fs'
import { dump } from 'js-yaml'

const head = Spot.parseContract("./src/api.ts")
const codes = Spot.parseContract("./src/codes.ts")
const categories = Spot.parseContract("./src/categories.ts")

const api = merge(
  [
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(head))) },
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(codes))) },
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(categories)))}
  ]
)

if (isErrorResult(api)) {
  console.error(`${api.message} (${api.type})`)
} else {
  writeFileSync('./openapi.yaml', dump(api.output), 'utf-8')
}
