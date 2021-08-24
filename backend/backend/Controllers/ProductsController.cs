using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Products.Core;
using Products.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {

        private readonly ILogger<ProductsController> _logger;
        private iProductsServices _productsServices;

        public ProductsController(ILogger<ProductsController> logger, iProductsServices productsServices)
        {
            _logger = logger;
            _productsServices = productsServices;
        }

        [HttpPost]
        public IActionResult CreateProduct(Product product)
        {
            return Ok(_productsServices.CreateProduct(product));
        }
    }
}
