import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
    teamName: String,
    teamID: Number,
    commanderID: Number,
});