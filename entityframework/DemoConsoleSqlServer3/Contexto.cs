using Microsoft.EntityFrameworkCore;

public class Contexto : DbContext
{
    public DbSet<Pessoa> Pessoas { get; set; }
    public DbSet<Cliente> Clientes { get; set; }
    public DbSet<Empregado> Empregados { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        optionsBuilder.UseSqlServer(@"Server=JULIO-NOTEG15;Database=exemplos2;Trusted_Connection=True");
        optionsBuilder.EnableSensitiveDataLogging().LogTo(Console.WriteLine);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        //Default é mapeamento "uma tabela por hierarquia"
        /*
        //Usar para mapeamento "uma tabela por tipo"
        modelBuilder.Entity<Pessoa>().ToTable("Pessoas");
        modelBuilder.Entity<Cliente>().ToTable("Clientes");
        modelBuilder.Entity<Empregado>().ToTable("Empregados");
        */
    }
}