import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TestDataService } from './test-data.service';
import { People } from './test-data.model';
import { CreatePeopleDto } from './dto/create-people.dto';

@Controller('test-data')
export class TestDataController {
  constructor(private testDataService: TestDataService) {}

  @Get()
  getAllPeople(): People[] {
    return this.testDataService.getAllPeople();
  }

  @Get('/:id')
  getPeopleById(@Param('id') id:string): People {
    return this.testDataService.getPeopleById(id)
  }

  @Post()
  createPeople(@Body() createPeopleDto: CreatePeopleDto): People {
    return this.testDataService.createPeople(createPeopleDto);
  }

  @Delete('/:id')
  removePeopleById(@Param('id') id:string): string {
    return this.testDataService.removePeopleById(id)
  }
}
