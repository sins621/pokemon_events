using Events.DataLayer.Models;
using Microsoft.EntityFrameworkCore;

namespace Events.DataLayer.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }
        
        public DbSet<CalendarEvent> CalenderEvents { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<CalendarEvent>().HasData(
                new CalendarEvent
                {
                    Id = 1,
                    Title = "Team Standup",
                    Description = "Daily sync with the team",
                    Start = new DateTime(2025, 5, 13, 9, 0, 0),
                    End = new DateTime(2025, 5, 13, 9, 30, 0),
                    IsAllDay = false,
                    Location = "Zoom"
                },
                new CalendarEvent
                {
                    Id = 2,
                    Title = "Project Kickoff",
                    Description = "Initial project kickoff meeting",
                    Start = new DateTime(2025, 5, 14, 10, 0, 0),
                    End = new DateTime(2025, 5, 14, 11, 30, 0),
                    IsAllDay = false,
                    Location = "Boardroom 1"
                }
            );
        }

    }
}
