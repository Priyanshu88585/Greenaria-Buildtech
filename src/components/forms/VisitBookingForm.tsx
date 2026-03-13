// src/components/forms/VisitBookingForm.tsx

"use client";

import { useState } from "react";
import Input from "../ui/input";
import Button from "../ui/button";

type Props = {
  propertyId: string;
};

export default function VisitBookingForm({ propertyId }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(null);

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.get("name"),
          phone: form.get("phone"),
          visitDate: form.get("visitDate"),
          propertyId,
          leadType: "VISIT",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      setSuccess(true);
      e.currentTarget.reset();
    } catch {
      setError("Unable to book visit. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">
      {/* TITLE */}

      <h3 className="text-lg font-semibold mb-4">Book a Site Visit</h3>

      <form onSubmit={submit} className="space-y-4">
        {/* NAME */}

        <Input name="name" placeholder="Your Name" required />

        {/* PHONE */}

        <Input name="phone" placeholder="Phone Number" required />

        {/* VISIT DATE */}

        <Input type="date" name="visitDate" required />

        {/* ERROR */}

        {error && <p className="text-sm text-red-500">{error}</p>}

        {/* SUCCESS */}

        {success && (
          <p className="text-sm text-green-600">Visit booked successfully!</p>
        )}

        {/* BUTTON */}

        <Button loading={loading} className="w-full">
          Book Visit
        </Button>
      </form>
    </div>
  );
}
