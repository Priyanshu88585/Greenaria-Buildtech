// useLeads hook placeholder

"use client";

import { useState } from "react";

export function useLeads() {
  const [loading, setLoading] = useState(false);

  async function createLead(data: any) {
    setLoading(true);

    await fetch("/api/leads", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);
  }

  return { createLead, loading };
}
("use client");

import { useState } from "react";

interface LeadPayload {
  name: string;
  phone?: string;
  email?: string;
  message?: string;
  propertyId?: string;
  type?: "CONTACT" | "ENQUIRY" | "VISIT";
}

/**
 * Hook for managing lead creation (contact forms, property enquiries, visit bookings).
 */
export function useLeads() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function createLead(data: LeadPayload) {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit lead");
      }

      setSuccess(true);
      return await res.json();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  }

  function resetState() {
    setError(null);
    setSuccess(false);
  }

  return {
    createLead,
    loading,
    error,
    success,
    resetState,
  };
}
