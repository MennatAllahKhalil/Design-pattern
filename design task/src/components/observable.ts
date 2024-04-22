export class Observable<TMessage> {
  private observers: ((data: TMessage) => void)[] = [];
  constructor() {}

  subscribe(fn: (data: TMessage) => void) {
    this.observers.push(fn);
  }

  unsubscribe(fn: (data: TMessage) => void) {
    this.observers = this.observers.filter((observer) => observer !== fn);
  }

  notify(data: TMessage) {
    this.observers.forEach((observer) => observer(data));
  }
}
