import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PeopleStatus } from '../test-data.model';

export class FilterPeopleDto {
  @IsOptional()
  @IsEnum(PeopleStatus)
  status?: PeopleStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
