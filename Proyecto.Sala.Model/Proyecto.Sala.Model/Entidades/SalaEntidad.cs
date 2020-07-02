using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proyecto.Sala.Model.Entidades
{
    public class SalaEntidad
    {
        public int ID { get; set; }
        public string Nombre { get; set; }
        public int Capacidad { get; set; }
        public string TipoSala { get; set; }
        public DateTime fecha { get; set; }
    }
}
