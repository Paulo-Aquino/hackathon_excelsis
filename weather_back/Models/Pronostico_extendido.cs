using weather_back.Controllers;
using weather_back.Models;

public class Pronosticos_extendido
{
    private int id;
    private String fechaHoraTxt;
    private String diaText;
    private main main;
    private Viento viento;
    private int visibilidad;
    private double probabilidadPrecipitacion;
    private Clima clima;
    private Lluvia lluvia;
    private string estado;

    // Constructor
    public Pronosticos_extendido(int id, String fechaHoraTxt, String diaText, main main, int visibilidad,
                       double probabilidadPrecipitacion, Clima clima, Viento viento, Lluvia lluvia, string estado)
    {
        this.id = id;
        this.fechaHoraTxt = fechaHoraTxt;
        this.diaText = diaText;
        this.probabilidadPrecipitacion = probabilidadPrecipitacion;
        this.clima = clima;
        this.viento = viento;
        this.visibilidad = visibilidad;
        this.lluvia = lluvia;
        this.estado = CalculateWeatherState(viento,main);
    }
    private string CalculateWeatherState(Viento viento, main main)
    {
        var weatherDataPerDay = new Dictionary<string, Dictionary<string, double>>
        {
            { "viento", new Dictionary<string, double> { { "velocidad", this.viento.getVelocidad() } } },
            { "main", new Dictionary<string, double>
                {
                    { "temp", this.main.gettemp() }, // Temperatura en grados Celsius
                    { "humedad", this.main.gethumedad() } // Humedad en porcentaje
                }
            }
        };

        var weatherAlerts = new WeatherAlerts();
        return weatherAlerts.GetAlertType(weatherDataPerDay);
    }
    // Getters y Setters
    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    // Resto de getters y setters...
}
