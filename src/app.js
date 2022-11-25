import express from "express";
import morgan from "morgan";


//ROUTES
import habitacionesRoutes from './routes/habitaciones.routes'
import usuariosRoutes from './routes/usuarios.routes'
import tiendaRoutes from './routes/tienda.routes'
import spaRoutes from './routes/spa.routes'
import rolesRoutes from './routes/roles.routes'
import menuRoutes from './routes/menu.routes'
import gymRoutes from './routes/gym.routes'
import empleadosRoutes from './routes/empleados.routes'
import reservacionesRoutes from './routes/reservaciones.routes'
import spareservacionesRoutes from './routes/spareservaciones.routes'
import membresiasRoutes from './routes/membresias.routes'
import gymreservacionesRoutes from './routes/gymreservaciones.routes'

const app=express();

//SETTINGS
app.set('port',4000);

//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use('/api/habitaciones',habitacionesRoutes);
app.use('/api/usuarios',usuariosRoutes);
app.use('/api/tienda',tiendaRoutes);
app.use('/api/spa',spaRoutes);
app.use('/api/roles',rolesRoutes);
app.use('/api/menu',menuRoutes);
app.use('/api/gym',gymRoutes);
app.use('/api/empleados',empleadosRoutes);
app.use('/api/reservaciones',reservacionesRoutes);
app.use('/api/spareservaciones',spareservacionesRoutes);
app.use('/api/membresias',membresiasRoutes);
app.use('/api/gymreservaciones',gymreservacionesRoutes);

export default app;