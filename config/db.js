import mongoose from "mongoose";

export const coneccionDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const url = `${connection.connection.host}: ${connection.connection.port}`
        console.log(`Conexión a la BD establecida..`);
    } catch (error) {
        const msg = error?.message || 'Error en la conexión a la BD';
        console.log(msg);
        process.exit(1)
    }
}