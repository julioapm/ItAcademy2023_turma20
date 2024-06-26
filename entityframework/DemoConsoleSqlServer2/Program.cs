using DemoConsoleSqlServer2.Models;

using (var contexto = new BloggingContext())
{
    /*
    contexto.Blogs.Add(new Blog {
        URL = "https://meublogao.com"
    });
    contexto.Blogs.Add(new Blog {
        URL = "https://outroblog.com"
    });
    contexto.SaveChanges();
    */
    /*
    var umBlog = contexto.Blogs.Find(1);
    if (umBlog != null) {
        umBlog.Posts.Add(new Post {
            Titulo = "Meu Primeiro Post",
            Conteudo = "blah blah blah"
        });
    }
    contexto.SaveChanges();
    */
    var umPost = contexto.Posts.Find(1);
    Console.WriteLine(umPost.Id);
    Console.WriteLine(umPost.Titulo);
    Console.WriteLine(umPost.Conteudo);
    Console.WriteLine(umPost.Blog.URL);
}