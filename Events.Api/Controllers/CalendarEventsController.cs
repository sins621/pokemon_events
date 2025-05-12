using Events.BusinessLayer;
using Events.DataLayer.Data;
using Events.DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Events.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalendarEventsController : ControllerBase
    {
        private readonly IGenericRepository<CalendarEvent>  _calendarRepo;

        public CalendarEventsController(IGenericRepository<CalendarEvent> calendarRepo)
        {
            _calendarRepo = calendarRepo;
        }

        // GET: api/CalendarEvents
        [HttpGet]
        public async Task<IActionResult> GetCalenderEvents()
        {
            var events = await _calendarRepo.GetAll();
            return Ok(events);
        }

        //// GET: api/CalendarEvents/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<CalendarEvent>> GetCalendarEvent(int id)
        //{
        //    var calendarEvent = await _context.CalenderEvents.FindAsync(id);

        //    if (calendarEvent == null)
        //    {
        //        return NotFound();
        //    }

        //    return calendarEvent;
        //}

        //// PUT: api/CalendarEvents/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutCalendarEvent(int id, CalendarEvent calendarEvent)
        //{
        //    if (id != calendarEvent.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(calendarEvent).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!CalendarEventExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/CalendarEvents
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<CalendarEvent>> PostCalendarEvent(CalendarEvent calendarEvent)
        //{
        //    _context.CalenderEvents.Add(calendarEvent);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetCalendarEvent", new { id = calendarEvent.Id }, calendarEvent);
        //}

        //// DELETE: api/CalendarEvents/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteCalendarEvent(int id)
        //{
        //    var calendarEvent = await _context.CalenderEvents.FindAsync(id);
        //    if (calendarEvent == null)
        //    {
        //        return NotFound();
        //    }
           
        //    _context.CalenderEvents.Remove(calendarEvent);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}
        
        //private bool CalendarEventExists(int id)
        //{
        //    return _context.CalenderEvents.Any(e => e.Id == id);
        //}
    }
}
