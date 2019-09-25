import { Members } from './Members';

export class FriendExpensesData{
    Date:Date;
    Description:string;
    amount:number;
    split:string;
    paidby:string;
    friendUserExpense:Array<Members>;
    
}