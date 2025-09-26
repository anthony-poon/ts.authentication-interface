import { User } from '@api/user';
import { MockProfile } from './profile';
import { MockTOTP } from './totp';

export const MockUser: typeof User = {
  Profile: MockProfile,
  TOTP: MockTOTP,
}