"use client";

import ClientEffects from "./ClientEffects";
import ContactFab from "./ContactFab";
import NavBar from "./NavBar";

export default function SiteChrome({ children }) {
  return (
    <>
      <ClientEffects />
      <NavBar />
      {/* isolate + z-index : le contenu scrollable reste sous la nav/fixes mais au-dessus du fond */}
      <div className="relative z-[1] min-h-0">{children}</div>
      <ContactFab />
    </>
  );
}
