namespace DemoWebServiceSqlServer.Models;

public class Tarefa
{
    public long Id {get; set;}
    public string Titulo {get; set;} = null!;
    public string? Descricao {get; set;}
    public bool Completa {get; set;}
}
