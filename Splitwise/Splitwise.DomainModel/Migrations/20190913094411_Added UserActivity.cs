using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Splitwise.DomainModel.Migrations
{
    public partial class AddedUserActivity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Activity_AspNetUsers_UserIdId",
                table: "Activity");

            migrationBuilder.RenameColumn(
                name: "UserIdId",
                table: "Activity",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Activity_UserIdId",
                table: "Activity",
                newName: "IX_Activity_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Activity_AspNetUsers_UserId",
                table: "Activity",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Activity_AspNetUsers_UserId",
                table: "Activity");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Activity",
                newName: "UserIdId");

            migrationBuilder.RenameIndex(
                name: "IX_Activity_UserId",
                table: "Activity",
                newName: "IX_Activity_UserIdId");

            migrationBuilder.AddForeignKey(
                name: "FK_Activity_AspNetUsers_UserIdId",
                table: "Activity",
                column: "UserIdId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
