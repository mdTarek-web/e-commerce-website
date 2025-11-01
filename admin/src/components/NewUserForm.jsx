import { Button, Dialog, DialogPanel, DialogTitle, Input } from '@headlessui/react'
import { IoMdAdd, IoMdClose } from 'react-icons/io';


const NewUserForm = ({
    isOpen,
    setIsOpen,
    close,
    selectedUser,
    getUsersList,
}) =>{

  return (
    <>
    {isOpen && (<div className="fixed w-full min-h-screen bg-black/70 top-0 left-0">
    <Dialog open={isOpen} as="div" onClose={close} className="relative z-10 focus:outline-none">
       <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel className="w-full max-w-xl rounded-lg px-10 py-5 bg-white shadow-md shadow-orange-200 border border-gray-300 text-black">
                   <div className='flex items-center justify-between'>
                     <DialogTitle>
                        {selectedUser ? "Edit User" : "Add User"}
                    </DialogTitle>
                    <IoMdClose className="text-lg hover:text-red-600 duration-300 cursor-pointer"/>
                   </div>
                   <div className='mt-3'>
                    <form className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-1'>
                            <label>Enter name</label>
                            <Input/>
                        </div>
                    </form>
                   </div>
            </DialogPanel>
        </div>
       </div>
      </Dialog>
    </div>)}
    </>
  )
}

export default NewUserForm