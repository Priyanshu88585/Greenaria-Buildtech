// src/components/forms/ContactForm.tsx

"use client";

import { useState } from "react";
import Input from "../ui/input";
import Button from "../ui/button";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          message: form.get("message"),
          leadType: "CONTACT",
        }),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white border p-6 rounded-xl shadow-sm"
    >
      {/* NAME */}

      <Input name="name" placeholder="Full Name" required />

      {/* EMAIL */}

      <Input name="email" type="email" placeholder="Email Address" required />

      {/* PHONE */}

      <Input name="phone" placeholder="Phone Number" required />

      {/* MESSAGE */}

      <textarea
        name="message"
        placeholder="Your message"
        rows={4}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* ERROR MESSAGE */}

      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* SUCCESS MESSAGE */}

      {success && (
        <p className="text-sm text-green-600">Message sent successfully!</p>
      )}

      {/* SUBMIT */}

      <Button loading={loading} className="w-full">
        Send Message
      </Button>
    </form>
  );
}
