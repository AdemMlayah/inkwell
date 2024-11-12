import React from 'react'
import { useForm } from "react-hook-form"
import { IoArrowBackOutline } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from './SignInSchema'
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

function SignInEmail({ setPageView }: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: "",
      Password: "",
    },
  })

  const onSubmit = (data: any) => {
    console.log(data) 
  }

  return (
    <div className='flex items-center flex-col w-full gap-20 '>
      <span className='text-header-1 text-'>Sign in with Email</span>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  w-[100%] md:w-[70%]">
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
        <span className='relative top-3 hover:underline hover:cursor-pointer'>Forgot Password ?</span>
        </form>
        
      </Form>
      <div
        onClick={() => setPageView('SignIn')}
        className='flex items-center gap-3 hover:cursor-pointer'>
        <IoArrowBackOutline className='text-primaryColor-400 hover:text-primaryColor-500 ' size={25} />
        <span className='text-body-3'>
          Back to other options
        </span>  
      </div>
    </div>
  )
}

export default SignInEmail
