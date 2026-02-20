import mongoose from "mongoose";

const worksInHospitals = new mongoose.Schema({
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
    workHour: {
        type: Number
    }
})

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        salary: {
            type: String,
            required: true
        },
        qualification: {
            type: String,
            required: true
        },
        experienceInYear: {
            type: Number,
            default: 0
        },
        worksInHospitals: [worksInHospitals]
    }, { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);