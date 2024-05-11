namespace weather_back.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using weather_back.Models;

    public class WeatherAlerts
    {
        // Método para calcular el tipo de alerta
        public string GetAlertType(Dictionary<string, Dictionary<string, double>> weatherDataPerDay)
        {
            string alertaType = "";
            double vientoVelocidadPrevista = weatherDataPerDay["viento"]["velocidad"];
            double temperaturaPrevista = weatherDataPerDay["main"]["temp"];
            int humedadPrevista = (int)weatherDataPerDay["main"]["humedad"];

            // Condiciones para alerta óptima
            if (vientoVelocidadPrevista >= 0 && vientoVelocidadPrevista < 50 &&
                temperaturaPrevista >= 15 && temperaturaPrevista < 30 &&
                humedadPrevista >= 30 && humedadPrevista < 70)
            {
                alertaType = "optimo";
            }
            // Condiciones para alerta de precaución
            else if ((vientoVelocidadPrevista >= 50 && vientoVelocidadPrevista < 70) ||
                     (temperaturaPrevista >= 0 && temperaturaPrevista < 15) ||
                     (temperaturaPrevista >= 30 && temperaturaPrevista < 40) ||
                     (humedadPrevista >= 0 && humedadPrevista < 30) ||
                     (humedadPrevista >= 70 && humedadPrevista < 100))
            {
                alertaType = "precaucion";
            }
            // Condiciones para alerta peligrosa
            else if (vientoVelocidadPrevista >= 70 ||
                     temperaturaPrevista < 0 ||
                     temperaturaPrevista >= 40 ||
                     humedadPrevista == 0 ||
                     humedadPrevista == 100)
            {
                alertaType = "peligroso";
            }

            return alertaType;
        }
      
    }
}
