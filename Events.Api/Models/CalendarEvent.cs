using System.ComponentModel.DataAnnotations;
using System.Diagnostics.Eventing.Reader;

namespace Events.Api.Models
{
    public class CalendarEvent
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Title { get; set; } = string.Empty;

        [StringLength(100)]
        public string? Description { get; set; }

        [Required]
        public DateTime Start { get; set; }

        [Required]
        public DateTime End { get; set; }

        public bool IsAllDay { get; set; } = false;

        public string? Location { get; set; }
    }
}
