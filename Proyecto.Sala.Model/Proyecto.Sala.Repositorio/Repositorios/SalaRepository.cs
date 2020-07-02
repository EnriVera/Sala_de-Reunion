﻿using Proyecto.Sala.Model.Entidades;
using Proyecto.Sala.Model.Interfaz;
using Proyecto.Sala.Repositorio.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Proyecto.Sala.Repositorio.Repositorios
{
    public class SalaRepository : ISalaRepositorio
    {
        SalaDBContext dBContext = new SalaDBContext();

        public SalaRepository() { }

        public void DeleteSala(int id)
        {
            throw new NotImplementedException();
        }

        public SalaEntidad GetSalaID(int id)
        {
            throw new NotImplementedException();
        }

        public List<SalaEntidad> GetSalas()
        {
            var listaSala = (from data in this.dBContext.sala
                            select data).ToList();
            List<SalaEntidad> listaEntida = new List<SalaEntidad>();
            listaSala.ForEach(e =>
            {
                listaEntida.Add(MapperSala(e));
            });
            return listaEntida;
        }

        public void PostSala(SalaEntidad salaEntidad)
        {
            throw new NotImplementedException();
        }

        public void PutSala(SalaEntidad salaEntidad)
        {
            throw new NotImplementedException();
        }


        private SalaEntidad MapperSala(salaDTO salaData)
        {
            SalaEntidad salaEntidad = new SalaEntidad();

            salaEntidad.ID = salaData.id_sala;
            salaEntidad.Nombre = salaData.nombre_sala;
            salaEntidad.Capacidad = salaData.capasidad_sala;
            salaEntidad.TipoSala = salaData.tiposala_sala;
            salaEntidad.fecha = salaData.fecha_sala;

            return salaEntidad;
        }
    }
}
