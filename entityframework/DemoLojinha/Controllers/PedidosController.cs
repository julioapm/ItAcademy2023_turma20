namespace DemoLojinha.Controllers;

using Microsoft.AspNetCore.Mvc;
using DemoLojinha.Services;
using DemoLojinha.Models;
using DemoLojinha.Dtos;

[ApiController]
[Route("api/v1/[controller]")]
public class PedidosController : ControllerBase
{
    private readonly IClienteRepository clienteRepository;
    private readonly IProdutoRepository produtoRepository;
    private readonly IPedidoRepository pedidoRepository;

    public PedidosController(IClienteRepository clienteRepository, IProdutoRepository produtoRepository, IPedidoRepository pedidoRepository)
    {
        this.clienteRepository = clienteRepository;
        this.produtoRepository = produtoRepository;
        this.pedidoRepository = pedidoRepository;
    }

    //POST .../api/v1/pedidos
    [HttpPost]
    public async Task<ActionResult<String>> PostNovoPedido(CarrinhoRequisicaoDTO carrinho)
    {
        var clienteExiste = await clienteRepository.ConsultaSeExiste(carrinho.IdCliente.GetValueOrDefault());
        if (!clienteExiste)
        {
            return BadRequest();
        }
        if (carrinho.Itens.Count() == 0)
        {
            return BadRequest();
        }
        var itensPedido = new List<Item>();
        foreach (var item in carrinho.Itens)
        {
            var produto = await produtoRepository.ConsultarPorIdAsync(item.IdProduto.GetValueOrDefault());
            if (produto == null)
            {
                return BadRequest();
            }
            var itemPedido = new Item{
                ProdutoId = item.IdProduto.GetValueOrDefault(),
                Quantidade = item.Quantidade.GetValueOrDefault()
            };
            itensPedido.Add(itemPedido);
        }
        var pedido = new Pedido{
            ClienteId = carrinho.IdCliente.GetValueOrDefault(),
            DataEmissao = DateTime.Now,
            Items = itensPedido
        };
        var novoPedido = await pedidoRepository.AdicionarAsync(pedido);
        return "Ok";
    }
}