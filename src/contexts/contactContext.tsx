import { createContext, useState, ReactNode, SetStateAction, Dispatch } from "react";
import { api } from "../lib/axios";
import { ContactProps } from "../types";

interface ContactContextProps {
  getContactsList: () => Promise<void>;
  contactsData: ContactProps[];
  setContactsData: Dispatch<SetStateAction<ContactProps[]>>
}

interface ContactContextProviderProps {
  children: ReactNode;
}

export const ContactContext = createContext({} as ContactContextProps)

export function ContactContextProvider({ children}: ContactContextProviderProps) {
  const [contactsData, setContactsData] = useState([] as ContactProps[]);

  async function getContactsList() {
    try {
      const response = await api.get("/show")
      setContactsData(response.data)
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <ContactContext.Provider 
      value={{
        getContactsList, 
        contactsData, 
        setContactsData,
      }}
    >
      { children }
    </ContactContext.Provider>
  )
}