import * as mongoose from "mongoose";

export const SoldierSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    team: Number,
    soldierID: Number,
    startDate: Date,
    endDate: Date,
    isCommander: Boolean,
    password: String,
    username: String,
  });