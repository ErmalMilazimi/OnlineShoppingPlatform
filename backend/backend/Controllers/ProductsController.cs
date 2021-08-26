using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.IO;
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
        private AppDbContext _context;

        public ProductsController(ILogger<ProductsController> logger, iProductsServices productsServices, IWebHostEnvironment webHostEnvironment, AppDbContext context)
        {
            _logger = logger;
            _productsServices = productsServices;
            _webHostEnvironment = webHostEnvironment;
            _context = context;
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

        //[HttpPost]
        //public IActionResult CreateProduct(Product product)
        //{
        //    return Ok(_productsServices.CreateProduct(product));
        //}

        [HttpPost]
        public async Task<IActionResult> Creates([FromForm] Product product)
        {
            var files = HttpContext.Request.Form.Files;
            foreach (var Image in files)
            {
                if (Image != null && Image.Length > 0)
                {
                    var file = Image;
                    var uploads = Path.Combine(_webHostEnvironment.ContentRootPath, "Images");
                    if (file.Length > 0)
                    {
                        var fileName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(file.FileName);
                        using (var fileStream = new FileStream(Path.Combine(uploads, fileName), FileMode.Create))
                        {
                            await file.CopyToAsync(fileStream);
                            product.ImagePath = fileName;
                        }

                    }
                }
            }
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            return Ok("added");
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
