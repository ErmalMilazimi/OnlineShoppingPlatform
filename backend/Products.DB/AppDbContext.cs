using Microsoft.EntityFrameworkCore;

namespace Products.DB
{
    public class AppDbContext : DbContext
    {
            public DbSet<Product> Products { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer(
                    @"Server=DESKTOP-HIRQSRT;Database=Products;Integrated Security=True");
            }

    }
}
