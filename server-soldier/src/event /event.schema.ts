import * as mongoose from "mongoose";

export const EventSchema = new mongoose.Schema({
    soldierID: Number,
    eventName: String, 
    startDate:Date,
    endDate:Date,
    eventID:Number,
    eventDesc:String,

});