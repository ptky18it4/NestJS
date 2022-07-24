/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TasksModule } from './tasks/tasks.module';
@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
    // }),
    TypeOrmModule.forRoot(typeOrmConfig),

    TasksModule,
  ],
})
export class AppModule {}
