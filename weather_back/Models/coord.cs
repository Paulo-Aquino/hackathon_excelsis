
namespace weather_back.Models
{
    public class coord
    {
        private double lat;
        private double lon;

        public coord(double lat, double lon)
        {
            this.lat = lat;
            this.lon = lon;
        }
        public bool getlat()
        {
            return lat;
        }
        public bool getlon()
        {
            return lon;
        }
    }
}
