using Microsoft.EntityFrameworkCore;

namespace DemoConsoleSqlServer2.Models;

public class BloggingContext : DbContext
{
    public DbSet<Blog> Blogs { get; set; } = null!;
    public DbSet<Post> Posts { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        optionsBuilder.UseSqlServer(@"Server=JULIO-NOTEG15;Database=blogging;Trusted_Connection=True");
        optionsBuilder.EnableSensitiveDataLogging().LogTo(Console.WriteLine);
    }
}