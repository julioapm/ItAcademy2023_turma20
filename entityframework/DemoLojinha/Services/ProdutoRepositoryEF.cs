namespace DemoLojinha.Services;

using Microsoft.EntityFrameworkCore;
using DemoLojinha.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using DemoLojinha.Database;

public class ProdutoRepositoryEF : IProdutoRepository
{
    private readonly LojinhaContext contexto;

    public ProdutoRepositoryEF(LojinhaContext contexto)
    {
        this.contexto = contexto;
    }

    public async Task<Produto?> ConsultarPorIdAsync(int id)
    {
        return await contexto.Produtos.FindAsync(id);
    }

    public async Task<IEnumerable<Produto>> ConsultarTodosAsync()
    {
        return await contexto.Produtos.OrderBy(p => p.Nome).ToListAsync();
    }
}