import { PeopleStatus } from '../test-data.model';

export class FilterPeopleDto {
  status?: PeopleStatus;
  search?: string;
}
