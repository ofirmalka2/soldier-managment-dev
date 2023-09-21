import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

export class SoldierModel {
    constructor(@InjectModel('Soldier') private readonly soldierModel: Model<any>) {}

    async create(soldier: any ): Promise<any> {
        const createdSoldier = new this.soldierModel(soldier);
        return createdSoldier.save();
    }

    async findAll(): Promise<any[]> {
        return this.soldierModel.find().exec();
      }

      //in the future more crud frunctions will be added 
}