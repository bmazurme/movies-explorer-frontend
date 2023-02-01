import React from 'react';

import Movies from './Movies';
import withUser from '../../hoc/withUser';

function MoviesPage() {
  return (<Movies />);
}

export default withUser(MoviesPage, true);
