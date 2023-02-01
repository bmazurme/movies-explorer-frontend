import React from 'react';

import Signin from './Signin';
import withUser from '../../hoc/withUser';

function SigninPage() {
  return (<Signin />);
}

export default withUser(SigninPage, false);
