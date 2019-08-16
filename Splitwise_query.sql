
--SELECT [dbo].[Group Member].user_ID,[dbo].[Group].Name
--FROM [dbo].[Group Member]
--INNER JOIN [dbo].[Group]
--ON [dbo].[Group Member].grp_ID = [dbo].[Group].Id
--where [dbo].[Group Member].user_ID=5


--SELECT [dbo].[Group Member].user_ID,[dbo].[Group].Name,[dbo].[user].Name
--FROM [dbo].[Group Member]
--INNER JOIN [dbo].[Group]
--ON [dbo].[Group Member].grp_ID = [dbo].[Group].Id
--INNER JOIN [dbo].[user]
--ON [dbo].[user].Id=[dbo].[Group Member].user_ID
--where [dbo].[Group].Name='Manali'

--select [dbo].[Expense].Description,[dbo].[Expense].cost,[dbo].[user].Name
--from [dbo].[Expense]
--INNER JOIN [dbo].[user]
--ON [dbo].[user].Id=[dbo].[Expense].paid_by
--where [dbo].[Expense].grp_ID=1


--select [dbo].[Expense].Description,[dbo].[Expense].cost,[dbo].[user].Name
--from [dbo].[Expense]
--INNER JOIN [dbo].[user]
--ON [dbo].[user].Id=[dbo].[Expense].paid_by
--where [dbo].[Expense].grp_ID IS NULL

--select [dbo].[Expense].Description,[dbo].[Bills].[split],[dbo].[user].Name
--from [dbo].[Expense]
--INNER JOIN [dbo].[Bills]
--ON [dbo].[Expense].Id=[dbo].[Bills].Exp_ID
--INNER JOIN [dbo].[user]
--ON [dbo].[user].Id=[dbo].[Bills].User_ID
--where [dbo].[Expense].Description = 'TRAIN TICKET' AND [dbo].[Bills].User_ID!=[dbo].[Expense].paid_by

--select [dbo].[user].Name,[dbo].[settlements].balance,[dbo].[user].Name
--from [dbo].[settlements]
--INNER JOIN [dbo].[user]
--ON [dbo].[settlements].pays_ID=[dbo].[user].Id


--select [dbo].[user].Name As payer,[dbo].[settlements].balance,user1.Name as Reciever
--from [dbo].[user] As user1 inner join [dbo].[user] 
--INNER JOIN [dbo].[settlements]
--ON [dbo].[user].Id = [dbo].[settlements].pays_ID
--on  user1.Id = [dbo].[settlements].to_user_ID
-------------------------------------------------------------------------------------
--select [dbo].[Group].Name as Group_Name,[dbo].[Group Member].user_ID
--from [dbo].[Group]
--INNER JOIN [dbo].[user]
--ON [dbo].[user].Id=[dbo].[Group].creater_ID
--INNER JOIN [dbo].[Group Member]
--ON [dbo].[Group Member].grp_ID=[dbo].[Group].Id AND [dbo].[Group Member].user_ID!=[dbo].[user].Id
--where [dbo].[user].Id=1

select [dbo].[Expense].Description,[dbo].[Expense].cost
from [dbo].[Expense]
where [dbo].[Expense].creater_ID = 1