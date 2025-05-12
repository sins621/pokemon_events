using Microsoft.EntityFrameworkCore;
using Events.Api.Models;

namespace Events.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<CalendarEvent> CalenderEvents { get; set; }
    }
}
