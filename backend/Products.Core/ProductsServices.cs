using Products.DB;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Products.Core
{
    public class ProductsServices : iProductsServices
    {
        private AppDbContext _context;
        public ProductsServices(AppDbContext context)
        {
            _context = context;
        }

        public Product CreateProduct(Product product)
        {
            _context.Add(product);
            _context.SaveChanges();

            return product;
        }

        public void DeleteProduct(int id)
        {
            var product = _context.Products.First(p => p.Id == id);
            _context.Products.Remove(product);
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

        public void EditProduct(int id, Product product)
        {
            var editProduct = _context.Products.First(p => p.Id == id);
            editProduct.Name = product.Name;
            editProduct.Description = product.Description;
            editProduct.Category = product.Category;
            editProduct.Price= product.Price;
            editProduct.Rating = product.Rating;
            _context.SaveChanges();
        }
    }
}
