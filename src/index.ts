require("dotenv").config();
import { Server } from "./app";

const startApp = async () => {
    const server = new Server();
    server.listen();
};

startApp();