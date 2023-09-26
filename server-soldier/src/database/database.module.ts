import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
@Module({
    imports: [
      MongooseModule.forRoot('mongodb+srv://ofirmalka2004:ofirm1207@cluster0.ewkertj.mongodb.net/', {
      }),
    ],
  })
  export class DatabaseModule {}