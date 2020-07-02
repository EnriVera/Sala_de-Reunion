using Proyecto.Sala.Model.Entidades;
using Proyecto.Sala.Model.Interfaz;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

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
    }
}
