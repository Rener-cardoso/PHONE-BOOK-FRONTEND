import { useContext } from "react";
import { ContactContext } from "../contexts/contactContext";

export function useContact() {
  const context = useContext(ContactContext);
  return context;
}