using (var contexto = new Contexto())
{
    
    var umCliente = new Cliente {
        Nome = "John Doe",
        Preferencias = "blah blah"
    };
    contexto.Clientes.Add(umCliente);
    var umEmpregado = new Empregado {
        Nome = "Mary Doe",
        Salario = 12345
    };
    contexto.Empregados.Add(umEmpregado);
    contexto.SaveChanges();
    
    /*
    var pessoas = contexto.Pessoas.ToList();
    pessoas.ForEach(p => {
        Console.WriteLine($"Id: {p.Id}");
        Console.WriteLine($"Nome: {p.Nome}");
    });
    */
    /*
    var clientes = contexto.Clientes.ToList();
    clientes.ForEach(c => {
        Console.WriteLine($"Id: {c.Id}");
        Console.WriteLine($"Nome: {c.Nome}");
        Console.WriteLine($"Preferencias: {c.Preferencias}");
    });
    */
}