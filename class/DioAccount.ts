export abstract class DioAccount {
  private name: string;
  private accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getBalance(): number {
    return this.balance;
  }

  getStatus(): boolean {
    return this.validateStatus();
  }

  deposit(value: number) {
    if (this.validateStatus()) {
      this.balance += value;
      console.log("Voce depositou: " + value);
      console.log("Saldo: " + this.balance);
    } else {
      console.log("Conta inválida");
    }
  }

  withdraw = (valor: number): void => {
    console.log(`Você está tentando sacar: ${valor}`);
    if (this.validateStatus() && this.balance >= valor) {
      this.balance -= valor;
      console.log("Voce sacou: " + valor);
      console.log("saldo: " + this.balance);
    } else {
      console.log(`Saque negado! saldo insuficiente: ${this.balance}`);
    }
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
