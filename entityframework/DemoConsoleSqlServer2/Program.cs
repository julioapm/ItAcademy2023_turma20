using DemoConsoleSqlServer2.Models;
using Microsoft.EntityFrameworkCore;

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
    /*
    //Eager loading
    var blogs = contexto.Blogs
                    .Include(b => b.Posts)
                    .ToList();
    foreach (var blog in blogs)
    {
        Console.WriteLine($"Id={blog.Id} posts:");
        foreach (var post in blog.Posts)
        {
            Console.WriteLine($"{post.Titulo}");
        }
    }
    */
    //Explicit loading
    var umBlog = contexto.Blogs.Single(b => b.Id == 1);
    contexto.Entry(umBlog)
            .Collection(b => b.Posts)
            .Load();
    Console.WriteLine($"Id={umBlog.Id} posts:");
    foreach (var post in umBlog.Posts)
    {
        Console.WriteLine($"{post.Titulo}");
    }
}