import { CompanyAccount } from './class/CompanyAccount'
import { NewDioAccount } from './class/NewDioAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const premiunAccount: NewDioAccount = new NewDioAccount("name", 40)
console.log(peopleAccount)
peopleAccount.deposit(100)
companyAccount.deposit(100)
console.log(peopleAccount)
peopleAccount.withdraw(50)
console.log(peopleAccount)
companyAccount.getLoan(25)
console.log(companyAccount)

premiunAccount.depositPremiun(50)
console.log(premiunAccount)