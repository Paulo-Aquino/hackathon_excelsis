namespace weather_back.Models
{
    public class Viento
    {
        private double velocidad;
        private double direccion;
        public Viento(double velocidad, double direccion)
        {
            this.velocidad = velocidad;
            this.direccion = direccion;
        }
        public double getVelocidad()
        {
            return velocidad;
        }
        public double getDireccion()
        {
            return direccion;
        }
    }
}
