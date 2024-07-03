using DemoLojinha.Models;

namespace DemoLojinha.Dtos;


public class ProdutoCatalogoRespostaDTO
{
    public int Id { get; set; }
    public string Nome { get; set; } = null!;
    public string? Descricao { get; set; } = null!;
    public string PrecoUnitario { get; set; } = null!;

    public static ProdutoCatalogoRespostaDTO DeModelParaDto(Produto produto)
    {
        ProdutoCatalogoRespostaDTO dto = new ProdutoCatalogoRespostaDTO();
        dto.Id = produto.Id;
        dto.Nome = produto.Nome;
        dto.Descricao = produto.Descricao;
        dto.PrecoUnitario = $"{produto.PrecoUnitario/100M:C}";
        return dto;
    }
}