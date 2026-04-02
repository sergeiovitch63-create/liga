"use client";

import ClientEffects from "./ClientEffects";
import ContactFab from "./ContactFab";
import NavBar from "./NavBar";

export default function SiteChrome({ children }) {
  return (
    <>
      <ClientEffects />
      <NavBar />
      {children}
      <ContactFab />
    </>
  );
}
