import { Spot } from "@airtasker/spot"
import { merge, isErrorResult } from 'openapi-merge'
import { writeFileSync } from 'fs'
import { dump } from 'js-yaml'

const head = Spot.parseContract("./src/api.ts")
const codes = Spot.parseContract("./src/services/codes.ts")
const accounts = Spot.parseContract("./src/services/accounts.ts")
const categories = Spot.parseContract("./src/services/categories.ts")
const items = Spot.parseContract("./src/services/items.ts")
const chains = Spot.parseContract("./src/services/chains.ts")
const locations = Spot.parseContract("./src/services/locations.ts")
const inventory = Spot.parseContract("./src/services/inventory.ts")
const customers = Spot.parseContract("./src/services/customers.ts")
const orders = Spot.parseContract("./src/services/orders.ts")
const invoices = Spot.parseContract("./src/services/invoices.ts")
const payments = Spot.parseContract("./src/services/payments.ts")
const myBookmarks = Spot.parseContract("./src/services/my/bookmarks.ts")
const myLikes = Spot.parseContract("./src/services/my/likes.ts")
const myPreferences = Spot.parseContract("./src/services/my/preferences.ts")
const myOrders = Spot.parseContract("./src/services/my/orders.ts")
const myInvoices = Spot.parseContract("./src/services/my/invoices.ts")
const myPayments = Spot.parseContract("./src/services/my/payments.ts")
const manageCategories = Spot.parseContract("./src/services/accounts/categories.ts")
const manageItems = Spot.parseContract("./src/services/accounts/items.ts")
const manageChains = Spot.parseContract("./src/services/accounts/chains.ts")
const manageLocations = Spot.parseContract("./src/services/accounts/locations.ts")
const manageInventory = Spot.parseContract("./src/services/accounts/inventory.ts")
const manageCustomers = Spot.parseContract("./src/services/accounts/customers.ts")
const manageOrders = Spot.parseContract("./src/services/accounts/orders.ts")
const manageInvoices = Spot.parseContract("./src/services/accounts/invoices.ts")
const managePayments = Spot.parseContract("./src/services/accounts/payments.ts")
const manageAccounts = Spot.parseContract("./src/services/manage/accounts.ts")

const api = merge(
  [
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(head))) },
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(codes))) },
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(accounts))) },
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(categories)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(items)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(chains)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(locations)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(inventory)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(customers)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(orders)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(invoices)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(payments)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(myBookmarks)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(myLikes)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(myPreferences)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(myOrders)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(myInvoices)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(myPayments)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(manageCategories)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(manageItems)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(manageChains)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(manageLocations)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(manageInventory)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(manageCustomers)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(manageOrders)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(manageInvoices)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(managePayments)))},
    { oas: JSON.parse(JSON.stringify(Spot.OpenApi3.generateOpenAPI3(manageAccounts)))},
  ]
)

if (isErrorResult(api)) {
  console.error(`${api.message} (${api.type})`)
} else {
  writeFileSync('./public/openapi.yaml', dump(api.output), 'utf-8')
}
