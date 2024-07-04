using DemoLojinha.Models;

namespace DemoLojinha.Services;

public interface IClienteRepository
{
    Task<Boolean> ConsultaSeExiste(int id);
    Task<Cliente?> ConsultaPorIdAsync(int id);
}