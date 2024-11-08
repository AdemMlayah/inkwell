import React from 'react'
import { useForm } from "react-hook-form"
import { IoArrowBackOutline } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from './SignUpSchema'
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

function SignUpEmail({ setPageView }: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      Email: "",
      Password: "",
    },
  })

  // Function to handle form submission
  const onSubmit = (data: any) => {
    console.log(data) // Handle your form data here, e.g., send to an API
  }

  return (
    <div className='flex items-center flex-col w-full gap-20 '>
      <span className='text-header-1 '>Sign up with Email</span>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[70%]">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-full bg-primaryColor-400 hover:bg-primaryColor-500' type="submit">Submit</Button>
        </form>
      </Form>
      <div
        onClick={() => setPageView('SignUp')}
        className='flex items-center gap-3 hover:cursor-pointer'>
        <IoArrowBackOutline className='text-primaryColor-400 hover:text-primaryColor-500 ' size={25} />
        <span className='text-body-3'>
          Back to other options
        </span>  
      </div>
    </div>
  )
}

export default SignUpEmail
