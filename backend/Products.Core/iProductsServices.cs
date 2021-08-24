using Products.DB;
using System;
using System.Collections.Generic;
using System.Text;

namespace Products.Core
{
    public interface iProductsServices
    {
        Product CreateProduct(Product product);
    }
}
