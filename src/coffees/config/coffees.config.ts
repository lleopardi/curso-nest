import { registerAs } from '@nestjs/config';

export default registerAs('coffess', () => ({
  foo: 'bar',
}));
