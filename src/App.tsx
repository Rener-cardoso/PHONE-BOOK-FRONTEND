import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { Header } from "./components/Header"
import { ContactBox } from "./components/ContactBox"
import { Plus, Search } from "lucide-react"
import { Dialog, DialogTrigger } from "./components/ui/dialog"
import { AddContactDialog } from "./components/AddContactDialog"
import { useEffect } from "react"
import { useContact } from "./hooks/useContact"

export function App() {
  const { 
    getContactsList,
    contactsData,
  } = useContact();

  useEffect(() => {
    getContactsList()
  }, [])

  return (
    <div className="max-w-4xl mx-auto pt-[3rem] px-4">
      <Header />

      <main>
        <div className="flex justify-between mt-[5rem]">
          <h2 className="text-3xl font-bold">Contacts</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus strokeWidth={3} className="w-5 h-5" />
                Add Contact
              </Button>
            </DialogTrigger>

            <AddContactDialog />
          </Dialog>
        </div>
        
        <Input
          icon={Search}
          placeholder="Search for contact by last name..."
          className="my-6"
        />

        <div className="flex flex-col">
          {contactsData?.map(contact => (
            <ContactBox
              key={contact.id}
              id={contact.id} 
              firstName={contact.firstName}
              lastName={contact.lastName}
              phone={contact.phone}
            />
          ))}
        </div>
        
      </main>
    </div>
  )
}