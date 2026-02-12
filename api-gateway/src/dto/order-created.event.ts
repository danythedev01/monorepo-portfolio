export class OrderCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly userId: string,
    public readonly price: number,
  ) {
    console.log(
      'OrderCreatedEvent created with orderId:',
      orderId,
      'userId:',
      userId,
      'price:',
      price,
    );
  }

  toString() {
    return JSON.stringify({
      orderId: this.orderId,
      userId: this.userId,
      price: this.price,
    });
  }
}
