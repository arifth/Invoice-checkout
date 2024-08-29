"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import usePosts from "@/services/product"
import constants from "./constants"


const data = [
  {
    transactionDate: 'arif ganteng',
    invoiceID: 'Invoice ID',
    customer: 'Customer',
    quantity: 'Quantity',
    transactions: 'Transactions',
    action: 'Action'
  }, {
    transactionDate: 'Transaction Date',
    invoiceID: 'Invoice ID',
    customer: 'Customer',
    quantity: 'Quantity',
    transactions: 'Transactions',
    action: 'Action'
  },

]

const transformedData = data.map(datum => ({
  ...datum,

}))


export default function IndexPage() {

  const { data } = usePosts.getListProduct({ variables: { limit: 500 } })
  const { LIST_COLUMN } = constants
  const headerKey = Object.keys(constants.LIST_COLUMN)

  return (
    <main className="bg-green">
      <Table>

        <TableHeader>
          <TableRow>
            {headerKey.map(col => (
              <TableHead className="w-[100px]">{constants.LIST_COLUMN[col]}</TableHead>
            ))}

          </TableRow>
        </TableHeader>
        <TableBody>
          {transformedData.map((data) => (
            <TableRow>
              {Object.keys(LIST_COLUMN).map(key => (
                <TableCell className="font-medium">{data?.[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table></main>
  )
}
