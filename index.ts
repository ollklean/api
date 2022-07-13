import { Spot } from "@airtasker/spot"
import { merge, isErrorResult } from 'openapi-merge'
import { writeFileSync } from 'fs'
import { dump } from 'js-yaml'

const head = Spot.parseContract("./src/api.ts")
const codes = Spot.parseContract("./src/codes.ts")
const categories = Spot.parseContract("./src/categories.ts")
const items = Spot.parseContract("./src/items.ts")
const chains = Spot.parseContract("./src/chains.ts")
const locations = Spot.parseContract("./src/locations.ts")
const inventory = Spot.parseContract("./src/inventory.ts")
const customers = Spot.parseContract("./src/customers.ts")
const orders = Spot.parseContract("./src/orders.ts")
const invoices = Spot.parseContract("./src/invoices.ts")
const payments = Spot.parseContract("./src/payments.ts")
const bookmarks = Spot.parseContract("./src/bookmarks.ts")

const api = merge(
  [
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(head))) },
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(codes))) },
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(categories)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(items)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(chains)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(locations)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(inventory)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(customers)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(orders)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(invoices)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(payments)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(bookmarks)))},
  ]
)

if (isErrorResult(api)) {
  console.error(`${api.message} (${api.type})`)
} else {
  writeFileSync('./public/openapi.yaml', dump(api.output), 'utf-8')
}
