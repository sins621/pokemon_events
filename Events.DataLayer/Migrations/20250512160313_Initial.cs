using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Events.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CalenderEvents",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Start = table.Column<DateTime>(type: "datetime2", nullable: false),
                    End = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsAllDay = table.Column<bool>(type: "bit", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CalenderEvents", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "CalenderEvents",
                columns: new[] { "Id", "Description", "End", "IsAllDay", "Location", "Start", "Title" },
                values: new object[,]
                {
                    { 1, "Daily sync with the team", new DateTime(2025, 5, 13, 9, 30, 0, 0, DateTimeKind.Unspecified), false, "Zoom", new DateTime(2025, 5, 13, 9, 0, 0, 0, DateTimeKind.Unspecified), "Team Standup" },
                    { 2, "Initial project kickoff meeting", new DateTime(2025, 5, 14, 11, 30, 0, 0, DateTimeKind.Unspecified), false, "Boardroom 1", new DateTime(2025, 5, 14, 10, 0, 0, 0, DateTimeKind.Unspecified), "Project Kickoff" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CalenderEvents");
        }
    }
}
