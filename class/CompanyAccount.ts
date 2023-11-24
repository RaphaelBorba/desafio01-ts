import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan: number): void => {
    if(this.validateStatus()){
      this.balance += loan
      console.log('Voce pegou um empréstimo')
      return;
    }
  }
}
