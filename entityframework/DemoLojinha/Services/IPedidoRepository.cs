using DemoLojinha.Models;

namespace DemoLojinha.Services;

public interface IPedidoRepository
{
    Task<Pedido> AdicionarAsync(Pedido pedido);
    Task<Pedido?> ConsultarPorIdAsync(int id);
}
