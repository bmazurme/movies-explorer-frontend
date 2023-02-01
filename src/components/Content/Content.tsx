import React from 'react';
import type { PropsWithChildren } from 'react';

import Header from '../Header';
import Footer from '../Footer';

export default function Content({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
