import { ResolveFn } from '@angular/router';

export const helloResolver: ResolveFn<string> = (route, state) => {
  return '👋 Hello world !';
};

export const goodbyeResolver: ResolveFn<string> =(route, state) => {
  return 'Goodbye Friend !'
}
