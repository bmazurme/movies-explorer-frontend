import React from 'react';

import ProfileEdit from './ProfileEdit';
import withUser from '../../hoc/withUser';

function ProfileEditPage() {
  return (<ProfileEdit />);
}

export default withUser(ProfileEditPage, true);
