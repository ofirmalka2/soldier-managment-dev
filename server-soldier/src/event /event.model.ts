import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

export class EventModel {
    constructor(@InjectModel('Event') private readonly eventModel: Model<any>) {}

    async create(event: any ): Promise<any> {
        const createdEvent = new this.eventModel(event);
        return createdEvent.save();
    }

    async findAll(): Promise<any[]> {
        return this.eventModel.find().exec();
      }

      //in the future more crud frunctions will be added 
}