import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './dto/get-user-request.dto';
import { OrderCreatedEvent } from './dto/order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    if (!orderCreatedEvent?.userId) {
      console.log('No userId provided in orderCreatedEvent');
      return;
    }
    this.authClient
      .send('get_user', new GetUserRequest(orderCreatedEvent.userId))
      .subscribe((user) => {
        console.log(
          `Billing user with stripe ID ${user.stripeUserId} a price of $${orderCreatedEvent.price}...`,
        );
      });
  }
  // handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
  //   console.log({ orderCreatedEvent });
  //   if (!orderCreatedEvent.userId) {
  //     console.log('No userId provided in orderCreatedEvent');
  //     return;
  //   }
  //   this.authClient
  //     .send('get_user', new GetUserRequest(orderCreatedEvent.userId))
  //     .subscribe((user: { stripeUserId: string }) => {
  //       console.log(
  //         `Billing user with stripe ID ${user.stripeUserId} a price of $${orderCreatedEvent.price}...`,
  //       );
  //     });
  // }
}
