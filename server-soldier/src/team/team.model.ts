import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

export class TeamModel {
    constructor(@InjectModel('Team') private readonly teamModel: Model<any>) {}

    async create(team: any ): Promise<any> {
        const createdTeam = new this.teamModel(team);
        return createdTeam.save();
    }

    async findAll(): Promise<any[]> {
        return this.teamModel.find().exec();
      }

      //in the future more crud frunctions will be added 
}