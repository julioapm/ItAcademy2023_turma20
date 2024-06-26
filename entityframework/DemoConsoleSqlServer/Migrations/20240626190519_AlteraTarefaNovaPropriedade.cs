using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DemoConsoleSqlServer.Migrations
{
    public partial class AlteraTarefaNovaPropriedade : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Descricao",
                table: "Tarefas",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Descricao",
                table: "Tarefas");
        }
    }
}
