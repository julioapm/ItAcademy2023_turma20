using DemoLojinha.Models;

namespace DemoLojinha.Services;

public interface IProdutoRepository
{
    Task<IEnumerable<Produto>> ConsultarTodosAsync();
}
