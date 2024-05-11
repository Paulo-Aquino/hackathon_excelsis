using Microsoft.AspNetCore.Mvc;
using weather_back.Models;
using System.Linq;


namespace weather_back.Controllers
{
    public class DepartmentStatus
    {

        [HttpGet("GetDepartment")]
        public ActionResult<List<Departamentos>> GetDepartment(int departamentoId = 0)
        {
            List<Departamentos> departamentos;
            
            if (departamentoId == 0)
            {
                // Devuelve todos los departamentos si no se especifica un ID

                departamentos = Departamentos.ToList();
            }
            else
            {
                // Devuelve el departamento específico por ID
                departamentos = Departamentos.Where(d => d.Id == departamentoId).ToList();
            }

            if (departamentos == null || departamentos.Count == 0)
            {
                return NotFound("No se encontraron departamentos.");
            }

            return departamentos;
        }

        private ActionResult<List<Departamentos>> NotFound(string v)
        {
            throw new NotImplementedException();
        }
    }


}

