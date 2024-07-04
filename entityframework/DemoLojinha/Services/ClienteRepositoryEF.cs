namespace DemoLojinha.Services;

using System.Threading.Tasks;
using DemoLojinha.Database;
using Microsoft.EntityFrameworkCore;

public class ClienteRepositoryEF : IClienteRepository
{
    private readonly LojinhaContext contexto;

    public ClienteRepositoryEF(LojinhaContext contexto)
    {
        this.contexto = contexto;
    }

    public Task<bool> ConsultaSeExiste(int id)
    {
        return contexto.Clientes.AnyAsync(c => c.Id == id);
    }
}