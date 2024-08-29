const ROOT_API = process.env.NEXT_PUBLIC_API_URL

const LIST_COLUMN = {
    transactionDate: 'Transaction Date',
    invoiceID: 'Invoice ID',
    customer: 'Customer',
    quantity:'Quantity',
    transactions: 'Transactions',
    action:'Action'

}

const PRODUCT_KEY = 'product'


export default {
    ROOT_API,LIST_COLUMN,PRODUCT_KEY
}