using DemoWebServiceSqlServer.Models;
using Microsoft.EntityFrameworkCore;

namespace DemoWebServiceSqlServer.DataBase;

public class TarefasContext : DbContext
{
    public DbSet<Tarefa> Tarefas { get; set; } = null!;

    public TarefasContext(){}

    public TarefasContext(DbContextOptions<TarefasContext> opcoes)
    : base(opcoes)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Tarefa>(entityBuilder => {
            entityBuilder.HasKey(t => t.Id)
                         .HasName("PK_Tarefas_Id");
            entityBuilder.Property(t => t.Titulo)
                         .HasMaxLength(30);
            entityBuilder.Property(t => t.Descricao)
                         .HasMaxLength(150);
        });
    }
}