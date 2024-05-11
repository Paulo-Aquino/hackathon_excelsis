namespace weather_back.Models
{


    public class main
    {
        private double temp;
        private double tempMin;
        private double tempMax;
        private int humedad;
        public main(double temp, double tempMin, double tempMax, int humedad)
        {
            this.temp = temp;
            this.tempMin = tempMin;
            this.tempMax = tempMax;
            this.humedad = humedad;
        }
        public double gettemp()
        {
            return temp;
        }
        public int gethumedad()
        {
            return humedad;
        }

    }
}
