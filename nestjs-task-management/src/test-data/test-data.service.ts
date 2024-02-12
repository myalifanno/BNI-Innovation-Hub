import { Injectable, NotFoundException } from '@nestjs/common';
import { People, PeopleStatus } from './test-data.model';
import { v4 as uuidv4 } from 'uuid';
import { CreatePeopleDto } from './dto/create-people.dto';
import { FilterPeopleDto } from './dto/people-filter.dto';

@Injectable()
export class TestDataService {
  private people: People[] = [];

  getAllPeople(): People[] {
    return this.people;
  }

  getPeopleById(id: string): People {
    const foundPeople = this.people.find((people) => people.id === id);

    if (!foundPeople) {
      throw new NotFoundException();
    }

    return foundPeople;
  }

  filterPeople(filterPeopleDto: FilterPeopleDto): People[] {
    const { status, search } = filterPeopleDto;

    let people = this.getAllPeople();

    if (status) {
      people = people.filter((people) => people.status === status);
    }

    if (search) {
      people = people.filter((people) => {
        if (
          people.username.includes(search) ||
          people.lastName.includes(search)
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

    return people;
  }

  removePeopleById(id: string): string {
    const foundPeople = this.getPeopleById(id)
    this.people = this.people.filter((people) => people.id !== foundPeople.id);

    const notice = `id: ${id} has been deleted`;
    return notice;
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

  updatePeopleStatus(id: string, status: PeopleStatus): People {
    const peopleFound = this.getPeopleById(id);
    peopleFound.status = status;
    return peopleFound;
  }
}
