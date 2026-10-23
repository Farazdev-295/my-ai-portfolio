'use server'; 

import { ContactFormSchema, TContactForm } from '@/types/contact';

export async function submitContactForm(data: TContactForm) {
  const result = ContactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  console.log("Server Action Received Valid Data:", result.data);

  return { success: true, message: "Form submitted successfully!" };
}