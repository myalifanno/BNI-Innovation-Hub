import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TestDataService } from './test-data.service';
import { People } from './test-data.model';
import { CreatePeopleDto } from './dto/create-people.dto';
import { FilterPeopleDto } from './dto/people-filter.dto';

@Controller('test-data')
export class TestDataController {
  constructor(private testDataService: TestDataService) {}

  @Get()
  getAllPeople(@Query() filterPeopleDto: FilterPeopleDto): People[] {
    if(Object.keys(filterPeopleDto).length) {
      return this.testDataService.filterPeople(filterPeopleDto)
    } else {
      return this.testDataService.getAllPeople();
    }
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

  @Patch('/:id/status')
  updatePeopleStatus(@Param('id') id: string): People {
    return this.testDataService.updatePeopleStatus(id)
  }
}
