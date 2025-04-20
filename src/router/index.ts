import { Router } from "express";
import routerUsuarios from "../modules/usuarios/usuarios.router";
import authroutes from "../modules/auth/auth.router";



const routes = Router();

const base = "/api/v1";



routes.use(`${base}/usuarios`, routerUsuarios);
routes.use(`${base}/usuarios`, authroutes);



export default routes;