using Microsoft.AspNetCore.Hosting;
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
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ProductsController(ILogger<ProductsController> logger, iProductsServices productsServices, IWebHostEnvironment webHostEnvironment)
        {
            _logger = logger;
            _productsServices = productsServices;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(_productsServices.GetProducts());
        }

        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            return Ok(_productsServices.GetProduct(id));
        }

        [HttpPost]
        public IActionResult CreateProduct(Product product)
        {
            return Ok(_productsServices.CreateProduct(product));
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            _productsServices.DeleteProduct(id);
            return Ok("Product has been deleted!");
        }

        [HttpPut("{id}")]
        public IActionResult EditProduct(int id, [FromBody] Product product)
        {
            _productsServices.EditProduct(id, product);
            return Ok("Product Edited!");
        }
    }
}
