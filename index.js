import { Subject, interval } from 'rxjs';
import { tap } from 'rxjs/operators';
const observer = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  compelte: () => console.log('done'),
};

const subject = new Subject();
const subscribtion = subject.subscribe(observer);
const subscribtionTwo = subject.subscribe(observer);

const interval$ = interval(2000).pipe(
  tap((value) => console.log('New Interval ', value))
);

interval$.subscribe(subject);
// interval$.subscribe(observer);
