export interface People {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  status: PeopleStatus;
}

export enum PeopleStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
