export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      console.log('Voce depositou')
      this.balance += value
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= value) {
        this.balance -= value
        console.log('Voce sacou')
        return
      }
      throw new Error("Saldo Indispovível")
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
