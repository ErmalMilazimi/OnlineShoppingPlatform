using Products.DB;
using System;
using System.Collections.Generic;
using System.Text;

namespace Products.Core
{
    public interface iProductsServices
    {
        Product CreateProduct(Product product);
        Product GetProduct(int id);
        List<Product> GetProducts();
        void DeleteProduct(int id);
        void EditProduct(int id, Product product);
    }
}
