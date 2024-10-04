import mongoose from "mongoose"
import moment from 'moment-timezone';

const StockSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    precioCosto: {
        type: mongoose.Decimal128,
        required: true
    },
    precioUnitario: {
        type: mongoose.Decimal128,
        required: true
    },
    codigo: {
        type: String,
        trim: true,
        required: true
    },
    proveedor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proveedor',
        required: false
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria',
        required: false
    },
    insumo: {
        type: Boolean,
        required: true
    },
    descripcion: {
        type: String,
        trim: true,
    },
    estado: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: moment().tz('America/Lima').toDate()
    },
    updatedAt: {
        type: Date,
        default: moment().tz('America/Lima').toDate()
    }
}, { timestamps: true })

export const Stock = mongoose.model('Stock', StockSchema)