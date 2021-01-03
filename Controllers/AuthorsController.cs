using Bookstore.Models;
using Bookstore.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        private readonly AuthorService _authorService;

        public AuthorsController(AuthorService authorService)
        {
            _authorService = authorService;
        }

        [HttpGet]
        public ActionResult<List<Author>> Get() =>
            _authorService.Get();

        [HttpGet("{id:length(24)}", Name = "GetAuthor")]
        public ActionResult<Author> Get(string id)
        {
            var author = _authorService.Get(id);

            if (author == null)
            {
                return NotFound();
            }

            return Ok(author);
        }

        [HttpPost]
        public ActionResult<Author> Create(Author author)
        {
            _authorService.Create(author);

            return CreatedAtRoute("GetAuthor", new { id = author.Id.ToString() }, author);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Author authorIn)
        {
            var author = _authorService.Get(id);

            if (author == null)
            {
                return NotFound();
            }

            _authorService.Update(id, authorIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var author = _authorService.Get(id);

            if (author == null)
            {
                return NotFound();
            }

            _authorService.Remove(author.Id);

            return NoContent();
        }

    }
}
