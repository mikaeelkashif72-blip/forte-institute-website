"use client";

import { createContext, useContext, useState } from "react";
import { RegistrationModal } from "@/components/RegistrationModal";

const Ctx = createContext<() => void>(() => {});

export function useOpenRegistration() {
  return useContext(Ctx);
}

export function RegistrationModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <Ctx.Provider value={() => setOpen(true)}>
      {children}
      <RegistrationModal open={open} onClose={() => setOpen(false)} />
    </Ctx.Provider>
  );
}
