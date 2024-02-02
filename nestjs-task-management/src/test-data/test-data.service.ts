import { Injectable } from '@nestjs/common';
import { People, PeopleStatus } from './test-data.model';
import { v4 as uuidv4 } from 'uuid';
import { CreatePeopleDto } from './dto/create-people.dto';

@Injectable()
export class TestDataService {
  private people: People[] = [];

  getAllPeople(): People[] {
    return this.people;
  }

  getPeopleById(id: string): People {
    return this.people.find((people) => people.id === id)
  }

  removePeopleById(id: string): string {
    this.people = this.people.filter((people) => people.id !== id)
    
    const message = `id: ${id} has been deleted`
    return message
  }

  createPeople(createPeopleDto: CreatePeopleDto) {
    const { firstName, lastName, username, email, password } = createPeopleDto;

    const people: People = {
      id: uuidv4(),
      firstName,
      lastName,
      username,
      email,
      password,
      status: PeopleStatus.OPEN,
    };

    this.people.push(people);
    return people;
  }
}
