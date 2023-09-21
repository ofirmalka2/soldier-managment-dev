import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
@Module({
    imports: [
      MongooseModule.forRoot('YOUR_MONGODB_CONNECTION_STRING', {
      }),
    ],
  })
  export class DatabaseModule {}