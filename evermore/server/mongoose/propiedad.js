import mongoose from 'mongoose'

const PropertySchema = new mongoose.Schema({
    adress: {
        type: mongoose.Schema.Types.String, required: true,
    },squareMeter: {
        type: mongoose.Schema.Types.Number, required: true,
    },kindProperty: {
        type: mongoose.Schema.Types.String, required: true,
    },actualState: {
        type: mongoose.Schema.Types.String, required: true,
    },propertyDescription: {
        type: mongoose.Schema.Types.String, required: true,
    },
});

export const Propiedad = mongoose.model("Propiedad", PropertySchema);