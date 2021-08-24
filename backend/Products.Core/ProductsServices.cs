using Products.DB;
using System;

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
    }
}
