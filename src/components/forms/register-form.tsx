"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { useRouter } from 'next/navigation'

import registerSchema, { TregisterSchema } from "@/schemas/register-schema"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import CardWrapper from "../shared/card-wrapper"
import { getErrorMessage } from "@/lib/error-message"


const RegisterForm = () => {
  const router = useRouter()
 

  const apiEndpoint = 'http://localhost:8080/api/auth/signup'


  // 1. Define your form.
  const form = useForm<TregisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: TregisterSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      }
      
      const response = await fetch(apiEndpoint, requestOptions)

      if (!response.ok) {
        const error = await response.text()
        throw new Error("Request failed: " + error)
      }

      const responseData = await response.json()

      console.log(responseData)
      // router.push("/dashboard")

    } 
    catch (error: unknown) {
      console.log(error)
      const errorMessage = getErrorMessage(error)
      console.log("Err message: ", getErrorMessage)
    }


  }  




  return (
    <CardWrapper>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit"
          >
            {form.formState.isSubmitting ? "loading" : "Register"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default RegisterForm