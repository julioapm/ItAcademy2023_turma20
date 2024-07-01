namespace DemoWebServiceSqlServer.Controllers;

using Microsoft.AspNetCore.Mvc;
using DemoWebServiceSqlServer.Services;
using DemoWebServiceSqlServer.Models;

[ApiController]
[Route("api/v1/[controller]")]
public class TarefasController : ControllerBase
{
    private readonly ITarefasRepository repository;

    public TarefasController(ITarefasRepository repository)
    {
        this.repository = repository;
    }

    //GET .../api/v1/tarefas
    [HttpGet]
    public Task<IEnumerable<Tarefa>> GetTodos()
    {
        return repository.ConsultarTodosAsync();
    }

    //GET .../api/v1/tarefas/{id}
    [HttpGet("{id:long}")]
    public async Task<ActionResult<Tarefa>> GetPorId(long id)
    {
        var umaTarefa = await repository.ConsultarPorIdAsync(id);
        if (umaTarefa == null)
        {
            return NotFound();
        }
        return umaTarefa;
    }
}