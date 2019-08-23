using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Splitwise.DomainModel.Migrations
{
    public partial class Added_list_in_expense : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Expense_ApplicationUser_CreaterId",
                table: "Expense");

            migrationBuilder.DropIndex(
                name: "IX_Expense_CreaterId",
                table: "Expense");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Expense",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ExpenseId",
                table: "ApplicationUser",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Expense_UserId",
                table: "Expense",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationUser_ExpenseId",
                table: "ApplicationUser",
                column: "ExpenseId");

            migrationBuilder.AddForeignKey(
                name: "FK_ApplicationUser_Expense_ExpenseId",
                table: "ApplicationUser",
                column: "ExpenseId",
                principalTable: "Expense",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Expense_ApplicationUser_UserId",
                table: "Expense",
                column: "UserId",
                principalTable: "ApplicationUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ApplicationUser_Expense_ExpenseId",
                table: "ApplicationUser");

            migrationBuilder.DropForeignKey(
                name: "FK_Expense_ApplicationUser_UserId",
                table: "Expense");

            migrationBuilder.DropIndex(
                name: "IX_Expense_UserId",
                table: "Expense");

            migrationBuilder.DropIndex(
                name: "IX_ApplicationUser_ExpenseId",
                table: "ApplicationUser");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Expense");

            migrationBuilder.DropColumn(
                name: "ExpenseId",
                table: "ApplicationUser");

            migrationBuilder.CreateIndex(
                name: "IX_Expense_CreaterId",
                table: "Expense",
                column: "CreaterId");

            migrationBuilder.AddForeignKey(
                name: "FK_Expense_ApplicationUser_CreaterId",
                table: "Expense",
                column: "CreaterId",
                principalTable: "ApplicationUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
