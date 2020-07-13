using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication11.Models;

namespace WebApplication11.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskdetailsController : ControllerBase
    {
        private readonly TaskContext _context;

        public TaskdetailsController(TaskContext context)
        {
            _context = context;
        }

        // GET: api/Taskdetails
        [HttpGet]
        public IEnumerable<Taskdetails> Gettasks()
        {
            return _context.tasks;
        }

        // GET: api/Taskdetails/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTaskdetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var taskdetails = await _context.tasks.FindAsync(id);

            if (taskdetails == null)
            {
                return NotFound();
            }

            return Ok(taskdetails);
        }

        // PUT: api/Taskdetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskdetails([FromRoute] int id, [FromBody] Taskdetails taskdetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != taskdetails.Id)
            {
                return BadRequest();
            }

            _context.Entry(taskdetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskdetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Taskdetails
        [HttpPost]
        public async Task<IActionResult> PostTaskdetails([FromBody] Taskdetails taskdetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.tasks.Add(taskdetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTaskdetails", new { id = taskdetails.Id }, taskdetails);
        }

        // DELETE: api/Taskdetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskdetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var taskdetails = await _context.tasks.FindAsync(id);
            if (taskdetails == null)
            {
                return NotFound();
            }

            _context.tasks.Remove(taskdetails);
            await _context.SaveChangesAsync();

            return Ok(taskdetails);
        }

        private bool TaskdetailsExists(int id)
        {
            return _context.tasks.Any(e => e.Id == id);
        }
    }
}