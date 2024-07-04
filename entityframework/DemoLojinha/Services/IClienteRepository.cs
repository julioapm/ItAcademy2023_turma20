namespace DemoLojinha.Services;

public interface IClienteRepository
{
    Task<Boolean> ConsultaSeExiste(int id);
}