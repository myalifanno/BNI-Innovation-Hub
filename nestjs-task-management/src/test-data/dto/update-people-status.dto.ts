import { IsEnum } from "class-validator";
import { PeopleStatus } from "../test-data.model";

export class UpdatePeopleStatusDto {
    @IsEnum(PeopleStatus)
    status: PeopleStatus
}