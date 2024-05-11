namespace weather_back.Models
{
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Net.Http;
    using System.Threading.Tasks;
    using Newtonsoft.Json;

    namespace weather_back.Controllers
    {
        [ApiController]
        [Route("[controller]")]
        public class WeatherDataController : ControllerBase
        {
            private readonly HttpClient _httpClient;

            public WeatherDataController(HttpClient httpClient)
            {
                _httpClient = httpClient;
            }

            [HttpGet("weather-alerts")]
            public async Task<IActionResult> GetWeatherAlerts()
            {
                // URL de la API de donde se obtendrán los datos meteorológicos
                string apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=YourCity&appid=YourAPIKey";

                // Realiza la llamada a la API externa
                var response = await _httpClient.GetAsync(apiUrl);
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    var rawWeatherData = JsonConvert.DeserializeObject<Dictionary<string, dynamic>>(content);

                    // Transforma los datos crudos a la estructura esperada por GetAlertType
                    var weatherDataPerDay = new Dictionary<string, Dictionary<string, double>>
                {
                    { "viento", new Dictionary<string, double> { { "velocidad", rawWeatherData["wind"]["speed"] } } },
                    { "main", new Dictionary<string, double>
                        {
                            { "temp", rawWeatherErrorData["main"]["temp"] },
                            { "humedad", rawWeatherData["main"]["humidity"] }
                        }
                    }
                };

                    // Instancia de WeatherAlerts para usar el método GetAlertType
                    var weatherAlerts = new WeatherAlerts();
                    var alertType = weatherAlerts.GetAlertType(weatherDataPerDay);

                    return Ok(alertType);
                }
                else
                {
                    return StatusCode((int)response.StatusCode, "Error al obtener los datos meteorológicos");
                }
            }
        }
    }

}
