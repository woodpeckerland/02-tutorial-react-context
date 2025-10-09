"use client";

import { createContext, type ReactNode } from "react";

export const ExampleContext = createContext("This is the default value");

interface ExampleProviderProps {
  children: ReactNode;
  value: string;
}

export function ExampleProvider({ children, value }: ExampleProviderProps) {
  return (
    <ExampleContext.Provider value={value}>{children}</ExampleContext.Provider>
  );
}
