import { Members } from './Members';

export class GroupExpenseData{
    id:number;
    CreaterId:string;
    Description:string;
    Cost:number;
    GrpId:number;
    PaidbyId:string;
    Date:Date;
    Split:string;
    GroupUsersExpenses:Array<Members>;
}
