import { Members } from './Members';

export class GroupExpenseData{
    id:number;
    createrId:string;
    description:string;
    cost:number;
    grpId:number;
    paidbyId:string;
    date:Date;
    split:string;
    groupUsersExpenses:Array<Members>;
}
