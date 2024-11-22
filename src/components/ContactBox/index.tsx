import { Pencil, Phone, Trash } from "lucide-react";
import { Button } from "../Button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { UpdateContactDialog } from "../UpdateContactDialog";
import { useContact } from "../../hooks/useContact";
import { api } from "../../lib/axios";

interface ContactBoxProps {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export function ContactBox({ id, firstName, lastName, phone, }: ContactBoxProps) {
  const { setContactsData } = useContact();

  function removeContact() {
    setContactsData(prevState => prevState.filter(item => item.id !== id));
  }

  async function handleRemoveContact() {
    try {
      await api.delete(`/delete/${id}`)
    } catch (error) {
      console.log(error)
    } finally {
      removeContact();
    }
  }

  return (
    <div className="bg-[white] border border-[gray] border-b-0 last:border-b-[1px] border-opacity-40 first:rounded-t-md last:rounded-b-md px-6 py-4 flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">{firstName} {lastName}</h2>
        <div className="flex items-center gap-2 text-[gray]">
          <Phone className="h-4 w-4" />
          <span>{phone}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Pencil className="w-5 h-5" />
            </Button>
          </DialogTrigger>

          <UpdateContactDialog 
            id={id} 
            firstName={firstName} 
            lastName={lastName} 
            phone={phone}
          />
        </Dialog>

        <Button 
          variant="destructive" 
          onClick={() => handleRemoveContact()}
        >
          <Trash className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}