import React from 'react';

import Profile from './Profile';
import withUser from '../../hoc/withUser';

function ProfilePage() {
  return (<Profile />);
}

export default withUser(ProfilePage, true);
