import React from 'react';

import Signup from './Signup';
import withUser from '../../hoc/withUser';

function SignupPage() {
  return (<Signup />);
}

export default withUser(SignupPage, false);
