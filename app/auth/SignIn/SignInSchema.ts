"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
export   const formSchema = z.object({
  Email: z.string(),
  Password : z.string().min(8)
})

