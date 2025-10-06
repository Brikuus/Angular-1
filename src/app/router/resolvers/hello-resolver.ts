import { ResolveFn } from '@angular/router';

export const helloResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
