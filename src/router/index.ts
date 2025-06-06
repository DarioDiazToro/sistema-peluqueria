import { Router } from "express";
import routerUsuarios from "../modules/usuarios/usuarios.router";
import authroutes from "../modules/auth/auth.router";
import routerClientes from "../modules/clientes/clientes.router";
import routerServicios from "../modules/servicios/servicios.router";




const routes = Router();

const base = "/api/v1";



routes.use(`${base}/usuarios`, routerUsuarios);
routes.use(`${base}/clientes`, routerClientes);
routes.use(`${base}/servicios`, routerServicios);


routes.use(`${base}/login`, authroutes);





export default routes;