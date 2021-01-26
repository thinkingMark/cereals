using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cereals.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Cereals.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CerealsController : ControllerBase
    {
        private readonly IProductService _productService;
        public CerealsController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("getProducts")]
        public async Task<IActionResult> GetData(string request)
        {
            try
            {
                var data = _productService.GetData(request);
                return Ok(data.Result);
            }
            catch(Exception e)
            {
                return StatusCode(500, e);
            }
        }
    }
}
