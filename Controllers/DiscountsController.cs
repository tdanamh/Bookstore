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
    public class DiscountsController : ControllerBase
    {
        private readonly DiscountService _discountService;

        public DiscountsController(DiscountService discountService)
        {
            _discountService = discountService;
        }

        [HttpGet]
        public ActionResult<List<Discount>> Get() =>
            _discountService.Get();

        [HttpGet("{id:length(24)}", Name = "GetDiscount")]
        public ActionResult<Discount> Get(string id)
        {
            var discount = _discountService.Get(id);

            if (discount == null)
            {
                return NotFound();
            }

            return discount;
        }

        [HttpPost]
        public ActionResult<Discount> Create(Discount discount)
        {
            _discountService.Create(discount);

            return CreatedAtRoute("GetDiscount", new { id = discount.Id.ToString() }, discount);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Discount discountIn)
        {
            var discount = _discountService.Get(id);

            if (discount == null)
            {
                return NotFound();
            }

            _discountService.Update(id, discountIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var discount = _discountService.Get(id);

            if (discount == null)
            {
                return NotFound();
            }

            _discountService.Remove(discount.Id);

            return NoContent();
        }
    }
}
