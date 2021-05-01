import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/", // Ruta de inicio siempre es /
      name: "inicio",
      component: () => import("./views/Inicio"),
    },
    {
      path: "/busquedas",
      name: "busquedas",
      component: () => import("./views/Busquedas"),
    },
    {
      path: "/ventas",
      name: "ventas",
      component: () => import("./views/Ventas"),
    },
    {
      path: "/total",
      name: "total",
      component: () => import("./views/Total"),
    },
    {
      path: "*",
      name: "notFound",
      component: () => import("./views/common/404"),
    }
  ],
});
