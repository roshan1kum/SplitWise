using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Splitwise.DomainModel.Migrations
{
    public partial class AddedGroupID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "split",
                table: "Expense",
                newName: "Split");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Settlements",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "GroupId",
                table: "Settlements",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ExpenseId",
                table: "ApplicationUser",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Settlements_GroupId",
                table: "Settlements",
                column: "GroupId");

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
                name: "FK_Settlements_Group_GroupId",
                table: "Settlements",
                column: "GroupId",
                principalTable: "Group",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ApplicationUser_Expense_ExpenseId",
                table: "ApplicationUser");

            migrationBuilder.DropForeignKey(
                name: "FK_Settlements_Group_GroupId",
                table: "Settlements");

            migrationBuilder.DropIndex(
                name: "IX_Settlements_GroupId",
                table: "Settlements");

            migrationBuilder.DropIndex(
                name: "IX_ApplicationUser_ExpenseId",
                table: "ApplicationUser");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "Settlements");

            migrationBuilder.DropColumn(
                name: "GroupId",
                table: "Settlements");

            migrationBuilder.DropColumn(
                name: "ExpenseId",
                table: "ApplicationUser");

            migrationBuilder.RenameColumn(
                name: "Split",
                table: "Expense",
                newName: "split");
        }
    }
}
