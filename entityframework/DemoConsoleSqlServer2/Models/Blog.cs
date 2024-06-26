namespace DemoConsoleSqlServer2.Models;

public class Blog
{
    public int Id { get; set;}
    public string URL {get;set;} = null!;
    public List<Post> Posts { get; set;} = new();
}
