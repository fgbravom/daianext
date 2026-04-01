import { type LucideIcon } from 'lucide-react'

export interface Product {
  id: string
  name: string
  description: string
  features: string[]
  image: string
  demoUrl?: string
}

export interface Client {
  id: string
  name: string
  logo: string
  description?: string
}

export interface Value {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface ContactForm {
  name: string
  email: string
  company: string
  message: string
}
