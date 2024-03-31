import mongoose from "mongoose";

const CupeSchema = mongoose.Schema({

    CompanyTitle: {
        type:String,
        required:true,
    },
    Reviewer: {
        type:String,
        required:true,
    },
    CompanyImg_URL:{
        type:String,
        required:true,
    },
    PlacementExp:{
        type:String,
        required:true,
    },
    CompanyCTC: {
        type:Number,
        required:true,
    },
    PlacementYear: {
        type:Number,
        required:true,
    },
},
{
    timestamps: true,
}
);

export const Cupe = mongoose.model("Cupe",CupeSchema);