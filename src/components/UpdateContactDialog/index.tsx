import { useForm } from "react-hook-form";
import { DialogClose, DialogContent, DialogTitle } from "../ui/dialog";
import { Input } from "../Input";
import { Button } from "../Button";
import { X } from "lucide-react";
import { api } from "../../lib/axios";
import { ContactProps } from "../../types";
import { useEffect } from "react";
import { useContact } from "../../hooks/useContact";

interface UpdateContactDialogProps {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export function UpdateContactDialog({ 
  id, 
  firstName, 
  lastName, 
  phone,
}: UpdateContactDialogProps) {
  const { 
    register, 
    handleSubmit, 
    setValue, 
  } = useForm<ContactProps>();
  
  const { setContactsData } = useContact();

  function updateContactList(value: ContactProps) {
    setContactsData(prevState => prevState.map(item => 
      item.id === value.id ? value : item))
  }

  async function handleUpdateContact(contact: ContactProps) {
    try {
      const { data } = await api.put(`/update/${id}`, {
        firstName: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone,
      })
      updateContactList(data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setValue("firstName", firstName)
    setValue("lastName", lastName)
    setValue("phone", phone)
  }, [id])

  return (
    <DialogContent className="bg-white p-6">
      <div className="relative">
        <DialogTitle className="text-2xl font-bold text-center">Update Contact:</DialogTitle>

        <DialogClose className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <X />
        </DialogClose>
      </div>

      <form onSubmit={handleSubmit(handleUpdateContact)} className="flex flex-col gap-4">
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
          Update Contact
        </Button>
      </form>
    </DialogContent>
  )
}