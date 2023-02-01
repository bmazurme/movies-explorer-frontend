import React from 'react';

import NotFound from './NotFound';
import withUser from '../../hoc/withUser';

function NotFoundPage() {
  return (<NotFound />);
}

export default withUser(NotFoundPage, false);
