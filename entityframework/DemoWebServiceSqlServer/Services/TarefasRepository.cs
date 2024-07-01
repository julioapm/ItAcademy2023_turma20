namespace DemoWebServiceSqlServer.Services;

using DemoWebServiceSqlServer.Models;
using DemoWebServiceSqlServer.DataBase;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

public class TarefasRepository : ITarefasRepository
{
    private readonly TarefasContext contexto;

    public TarefasRepository(TarefasContext contexto)
    {
        this.contexto = contexto;
    }

    public Task<Tarefa?> ConsultarPorIdAsync(long id)
    {
        return contexto.Tarefas
                .Where(t => t.Id == id)
                .FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<Tarefa>> ConsultarTodosAsync()
    {
        return await contexto.Tarefas
                .OrderBy(t => t.Titulo)
                .ToListAsync();
    }
}