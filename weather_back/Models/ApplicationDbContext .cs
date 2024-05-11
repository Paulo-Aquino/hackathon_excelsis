using Microsoft.EntityFrameworkCore;
using weather_back.Models;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Departamentos> Departamentos { get; set; }
    public DbSet<Departamentos> Clima { get; set; }
    public DbSet<Departamentos> coord { get; set; }
    public DbSet<Departamentos> Lluvia { get; set; }
    public DbSet<Departamentos> main { get; set; }
    public DbSet<Departamentos> Pronostico_extendido { get; set; }
    public DbSet<Departamentos> Viento { get; set; }

    // Puedes añadir más DbSets para otros modelos
}

