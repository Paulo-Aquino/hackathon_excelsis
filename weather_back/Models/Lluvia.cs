namespace weather_back.Models
{
    public class Lluvia
    {
        private int id;
        private double volumen1h;

        // Constructor
        public Lluvia(int id, double volumen1h)
        {
            this.id = id;
            this.volumen1h = volumen1h;
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

        public double getVolumen1h()
        {
            return volumen1h;
        }

        public void setVolumen1h(double volumen1h)
        {
            this.volumen1h = volumen1h;
        }
    }

}
