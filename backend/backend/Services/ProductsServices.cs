using backend.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
    public class ProductsServices : iProductsServices
    {
        private AppDbContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ProductsServices(AppDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        public Product CreateProduct(Product product)
        {
          
            _context.Products.Add(product);
            _context.SaveChanges();

            return product;
        }

        public async Task deleteImages(string image)
        {
            var imageDelete = Path.Combine(_webHostEnvironment.ContentRootPath, "Images", image);
            FileInfo fi = new FileInfo(imageDelete);
            if (fi != null)
            {
                System.IO.File.Delete(imageDelete);
                fi.Delete();
            }
        }

        public void DeleteProduct(int id)
        {
            var product = _context.Products.First(p => p.Id == id);
            _context.Products.Remove(product);
            deleteImages(product.ImagePath);
            _context.SaveChanges();
        }

        public Product GetProduct(int id)
        {
            return _context.Products.First(p => p.Id == id);
        }

        public List<Product> GetProducts()
        {
            return _context.Products.ToList();
        }

        public List<Product> SearchProducts(string search)
        {
            if (string.IsNullOrEmpty(search)){
                return _context.Products.ToList();
            }

            return _context.Products.Where(p => p.Name.Contains(search) || p.Category.Contains(search)).ToList();

        }

        public void EditProduct(int id, Product product)
        {
            var editProduct = _context.Products.First(p => p.Id == id);
            editProduct.Name = product.Name;
            editProduct.Description = product.Description;
            editProduct.Category = product.Category;
            editProduct.Price= product.Price;
            editProduct.Rating = product.Rating;
            editProduct.ImagePath = product.ImagePath;
            _context.SaveChanges();
        }
    }
}
