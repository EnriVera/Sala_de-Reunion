using Proyecto.Sala.Model.Entidades;
using Proyecto.Sala.Model.Interfaz;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace Proyecto.Sala.WebApi.Controllers
{
    public class SalaController : BaseController
    {
        private ISalaRepositorio repository;

        public SalaController(ISalaRepositorio repository)
        {
            if (repository == null)
                throw new ArgumentNullException("repository error");
            this.repository = repository;
        }

        [HttpGet]
        [Route("api/sala/obtener")]
        public IHttpActionResult GetSalas()
        {
            return Ok(this.repository.GetSalas());
        }

        [HttpPost]
        [Route("api/sala/guardar")]
        public IHttpActionResult PostSala(SalaEntidad salaEntidad)
        {
            if (salaEntidad == null) return NotFound();
            this.repository.PostSala(salaEntidad);
            return Ok();
        }

        [HttpDelete]
        [Route("api/sala/delete")]
        public IHttpActionResult DeleteSala(string id)
        {
            if (int.Parse(id) == 0) return NotFound();
            this.repository.DeleteSala(int.Parse(id));
            return Ok();
        }
    }
}
