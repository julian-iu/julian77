const app = require('./app');
const database = require('./DB/database.js');
const Contipo = require('./rutas/Rtipo.js');
const Conproductor = require('./rutas/Rproducer.js');
const Conmedia = require('./rutas/Rmedia.js');
const Congenero = require('./rutas/Rgenero.js');
const Condirector = require('./rutas/Rdirector.js');

async function main(){
    await app.listen(1200);
    console.log('conexion exitosa')
}
app.get('/', (req, res) => {
    res.send('congratulation');
});
app.use('/tipo', Contipo);
app.use('/productor', Conproductor);
app.use('/media', Conmedia);
app.use('/genero', Congenero);
app.use('/director', Condirector);
main();
