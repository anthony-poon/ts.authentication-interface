import API from '@api/index';
import { MockAuthentication } from './authentication';
import { MockUser } from './user';

const MockAPI: typeof API = {
  Authentication: MockAuthentication,
  User: MockUser
}