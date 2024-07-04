using DemoLojinha.Database;
using DemoLojinha.Models;

namespace DemoLojinha.Services;

public class PedidoRepositoryEF : IPedidoRepository
{
    private readonly LojinhaContext contexto;

    public PedidoRepositoryEF(LojinhaContext contexto)
    {
        this.contexto = contexto;
    }

    public async Task<Pedido> AdicionarAsync(Pedido pedido)
    {
        await contexto.Pedidos.AddAsync(pedido);
        await contexto.SaveChangesAsync();
        return pedido;
    }
}