/* eslint-disable prettier/prettier */
import { Controller, Get, Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
})
export class AppModule {}
