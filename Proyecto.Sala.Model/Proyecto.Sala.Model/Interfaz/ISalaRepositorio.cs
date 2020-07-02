using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Proyecto.Sala.Model.Entidades;

namespace Proyecto.Sala.Model.Interfaz
{
    public interface ISalaRepositorio
    {
        List<SalaEntidad> GetSalas();
        SalaEntidad GetSalaID(int id);
        void PostSala(SalaEntidad salaEntidad);
        void PutSala(SalaEntidad salaEntidad);
        void DeleteSala(int id);
    }
}
