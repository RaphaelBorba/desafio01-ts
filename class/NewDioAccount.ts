import { DioAccount } from "./DioAccount";

export class NewDioAccount extends DioAccount {

    depositPremiun(value:number){
        this.deposit(value+10)
    }
}