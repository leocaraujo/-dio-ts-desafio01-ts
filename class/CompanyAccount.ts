import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  getLoan = (value: number) => {
    if (this.getStatus()) {
      this.deposit(value);
      console.log("Voce pegou um empréstimo de: " + value);
    } else {
      console.log("Conta inválida");
    }
  };
}
