using backend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services
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
