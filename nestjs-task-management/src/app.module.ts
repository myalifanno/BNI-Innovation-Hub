import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TestDataModule } from './test-data/test-data.module';

@Module({
  imports: [TasksModule, TestDataModule],
})
export class AppModule {}
