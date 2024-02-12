import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TestDataModule } from './test-data/test-data.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TestDataModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      autoLoadEntities: true,
      synchronize: true
    }),
  ],
})
export class AppModule {}
