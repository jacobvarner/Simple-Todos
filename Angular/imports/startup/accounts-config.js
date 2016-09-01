import { Accounts } from 'meteor/accounts-base';

Accounts.us.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
