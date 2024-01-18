import React, { ReactNode } from "react";

import { Header } from "layout/Header/Header";
import { Footer } from "layout/Footer/Footer";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
