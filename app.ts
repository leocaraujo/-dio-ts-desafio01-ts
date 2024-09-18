import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
console.log(companyAccount)

const premiumAccount: PremiumAccount = new PremiumAccount('Conta Premium', 30)
premiumAccount.deposit(100)
console.log(premiumAccount)