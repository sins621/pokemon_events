using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Events.Api.Migrations
{
    /// <inheritdoc />
    public partial class SeedCalendarEvents : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
            migrationBuilder.DeleteData(
                table: "CalenderEvents",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "CalenderEvents",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
