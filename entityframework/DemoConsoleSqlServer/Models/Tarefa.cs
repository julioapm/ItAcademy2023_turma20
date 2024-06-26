namespace DemoConsoleSqlServer.Models;

public class Tarefa
{
    public long Id {get; set;}
    public string Nome {get; set;} = null!;
    public bool Completa {get; set;}
}