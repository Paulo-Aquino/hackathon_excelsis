using System.Xml.XPath;

namespace weather_back.Models
{
    public class Departamentos
    {

        private int id;
        private String nombre;
        private int poblacion;
        private Pronosticos_extendido pronostico_Extendido;
        private Clima clima;
        private coord coord;
        // Constructor


        public Departamentos(int id, String nombre, int poblacion, coord coord, Pronosticos_extendido pronostico_Extendido, Clima clima)
        {
            this.id = id;
            this.nombre = nombre;
            this.poblacion = poblacion;
            this.coord = coord;
            this.pronostico_Extendido = pronostico_Extendido;
            this.clima = clima;
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

        public String getNombre()
        {
            return nombre;
        }

        public void setNombre(String nombre)
        {
            this.nombre = nombre;
        }

        public int getPoblacion()
        {
            return poblacion;
        }

        public void setPoblacion(int poblacion)
        {
            this.poblacion = poblacion;
        }
    }

}
