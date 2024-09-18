import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
    
  deposit = (value: number) => {
    if (this.getStatus()) {
        super.deposit(value + 10);
        console.log("Voce depositou: " + value);
        console.log("Saldo: " + super.getBalance());
    } else {
        console.log("Conta inválida");

    }
  };
  
}



