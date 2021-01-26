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

        [HttpPost("getProducts")]
        public async Task<IActionResult> GetData([FromBody]string request)
        {
            try
            {
                var data = _productService.GetData(request);
                return Ok(data);
            }
            catch(Exception e)
            {
                return StatusCode(500, e);
            }
        }
    }
}
