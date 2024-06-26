namespace DemoConsoleSqlServer2.Models;

public class Post
{
    public int Id { get; set;}
    public string Titulo { get; set;} = null!;
    public string Conteudo { get; set;} = null!;
    public Blog Blog { get; set;} = null!;
    public int BlogId { get; set; }
}