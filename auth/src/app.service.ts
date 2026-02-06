import { Injectable } from '@nestjs/common';

class GetUserRequest {
  constructor(public readonly userId: string) {}
}

export interface IUsers {
  userId: string;
  stripeUserId: string;
}

@Injectable()
export class AppService {
  private readonly users: IUsers[] = [
    {
      userId: 'daniel',
      stripeUserId: '43234',
    },
    {
      userId: '345',
      stripeUserId: '27279',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    console.log('Returning user for userId:', getUserRequest.userId);
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
