import { useForm } from "react-hook-form";
import { DialogClose, DialogContent, DialogTitle } from "../ui/dialog";
import { Input } from "../Input";
import { Button } from "../Button";
import { X } from "lucide-react";
import { api } from "../../lib/axios";
import { ContactProps } from "../../types";
import { useContact } from "../../hooks/useContact";

export function AddContactDialog() {
  const { register, handleSubmit, reset, } = useForm<ContactProps>();

  const { setContactsData } = useContact();

  function updateContactList(value: ContactProps) {
    setContactsData(prevState => [...prevState, value])
  }

  async function handleAddContact(contact: ContactProps) {
    try {
      const { data } = await api.post("/create", {
        firstName: contact.firstName, 
        lastName: contact.lastName, 
        phone: contact.phone,
      });
      updateContactList(data);
      reset();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <DialogContent className="bg-white p-6">
      <div className="relative">
        <DialogTitle className="text-2xl font-bold text-center">Add Contact:</DialogTitle>

        <DialogClose className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <X />
        </DialogClose>
      </div>

      <form onSubmit={handleSubmit(handleAddContact)} className="flex flex-col gap-4">
        <Input 
          label="Fist Name"
          placeholder="First Name"
          {...register("firstName")} 
        />

        <Input 
          label="Last Name"
          placeholder="Last Name"
          {...register("lastName")} 
        />

        <Input 
          label="Phone Number"
          placeholder="(xx) xxxxx-xxxx"
          {...register("phone")} 
        />
        
        <Button className="w-full mt-2">
          Add Contact
        </Button>
      </form>
    </DialogContent>
  )
}