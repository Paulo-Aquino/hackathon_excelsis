namespace weather_back.Models
{
    public class Clima
    {
        private int id;
        private String tipo;
        private String description;

        // Constructor
        public Clima(int id, String tipo, String description)
        {
            this.id = id;
            this.tipo = tipo;
            this.description = description;
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

        public String getTipo()
        {
            return tipo;
        }

        public void setTipo(String tipo)
        {
            this.tipo = tipo;
        }

        public String getDescription()
        {
            return description;
        }

        public void setDescription(String description)
        {
            this.description = description;
        }
    }
}
