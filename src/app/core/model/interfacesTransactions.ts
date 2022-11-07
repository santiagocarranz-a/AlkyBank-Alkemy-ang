export interface Transactions { 
  amount: number,
  concept: string, // "Pago de honorarios"
  date: string,    // "2022-10-26 15:00:00"
  type: string,    // "topup|payment"
  accountId: number,
  userId: number,
  to_account_id: number
}