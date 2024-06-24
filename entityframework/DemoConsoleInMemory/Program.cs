using System.Collections.Immutable;

Console.WriteLine("Iniciando programa...");
using (var contexto = new TarefaContext())
{
    Console.WriteLine("Inserindo dados...");
    contexto.Tarefas.Add(new Tarefa{
        Nome = "Estudar .NET",
        Descricao = "Ler o material do Learn Microsoft",
        Completa = false,
    });
    contexto.Tarefas.Add(new Tarefa{
        Nome = "Lavar a louça",
        Completa = true
    });
    contexto.SaveChanges();

    Console.WriteLine("Consultando dados...");
    var todasTarefas = contexto.Tarefas.ToImmutableList();
    todasTarefas.ForEach(t => Console.WriteLine($"Id={t.Id} Nome={t.Nome} Descricao={t.Descricao} Completa={t.Completa}"));

    Console.WriteLine("Alterando dados...");
    var umaTarefa = contexto.Tarefas.Find(1L);
    if (umaTarefa != null)
    {
        umaTarefa.Completa = true;
    }
    contexto.SaveChanges();
    todasTarefas = contexto.Tarefas.ToImmutableList();
    todasTarefas.ForEach(t => Console.WriteLine($"Id={t.Id} Nome={t.Nome} Descricao={t.Descricao} Completa={t.Completa}"));

    Console.WriteLine("Removendo dados...");
    umaTarefa = contexto.Tarefas.Find(2L);
    if (umaTarefa != null)
    {
        contexto.Tarefas.Remove(umaTarefa);
    }
    contexto.SaveChanges();
    todasTarefas = contexto.Tarefas.ToImmutableList();
    todasTarefas.ForEach(t => Console.WriteLine($"Id={t.Id} Nome={t.Nome} Descricao={t.Descricao} Completa={t.Completa}"));
}
Console.WriteLine("Fim do programa.");
