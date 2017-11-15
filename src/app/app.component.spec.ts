import test from 'ava';

import { AppComponent } from './app.component';

const app = new AppComponent(null);

test('Title is \'App Component\'!', (t) => {
  const expected = 'App Component!';
  t.is(app.title, expected);
});

test(`Title is 'this should fail'`, (t) => {
  t.is(app.title, 'this should fail');
});
