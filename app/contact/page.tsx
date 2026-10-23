'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, TContactForm } from '@/types/contact';
import { submitContactForm } from '@/app/actions/contact';

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<TContactForm>({
    resolver: zodResolver(ContactFormSchema)
  });

  const onSubmit = async (data: TContactForm) => {
    const response = await submitContactForm(data);
    if (response.success) {
      alert("Form submitted successfully!");
      reset();
    } else {
      alert("Validation failed on server.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-cyan-400">Contact Us (Server Action)</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-slate-300">Name</label>
            <input
              {...register('name')}
              className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded text-white focus:outline-none focus:border-cyan-500"
              placeholder="Faraz Shahbaz"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1 text-slate-300">Email</label>
            <input
              {...register('email')}
              className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded text-white focus:outline-none focus:border-cyan-500"
              placeholder="faraz@example.com"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1 text-slate-300">Message</label>
            <textarea
              {...register('message')}
              rows={4}
              className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded text-white focus:outline-none focus:border-cyan-500"
              placeholder="Write your message here..."
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-cyan-500 text-slate-950 font-bold p-3 rounded hover:bg-cyan-400 transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}