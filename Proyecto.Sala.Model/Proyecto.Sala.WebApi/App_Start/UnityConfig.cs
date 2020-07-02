using CommonServiceLocator;
using Proyecto.Sala.Model.Interfaz;
using Proyecto.Sala.Repositorio.Repositorios;
using System.Web.Http;
using Unity;
using Unity.ServiceLocation;
using Unity.WebApi;

namespace Proyecto.Sala.WebApi
{
    public static class UnityConfig
    {
        private static IUnityContainer container;
        public static void RegisterComponents()
        {
			container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<ISalaRepositorio, SalaRepository>();
            var locator = new UnityServiceLocator(container);
            ServiceLocator.SetLocatorProvider(() => locator);

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);

        }

        public static IUnityContainer GetUnityContainer()
        {
            return container;
        }
    }
}