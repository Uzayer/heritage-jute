"use server";

import { z } from "zod";

const inquirySchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  employees: z.string().optional(),
  message: z.string().min(1),
});

export async function submitContactInquiry(raw: unknown) {
  const parsed = inquirySchema.safeParse(raw);
  if (!parsed.success) throw new Error("Invalid form fields");

  const key = process.env.WEB3FORMS_ACCESS_KEY;
  if (!key) throw new Error("Contact form is not configured");

  const { fullName, email, company, employees, message } = parsed.data;
  const details = [
    message,
    company ? `\nCompany: ${company}` : "",
    employees ? `\nTeam size: ${employees}` : "",
  ]
    .filter(Boolean)
    .join("");

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      subject: `Website inquiry — ${fullName}`,
      from_name: fullName,
      email,
      message: details,
    }),
  });

  const data = (await res.json()) as { success?: boolean; message?: string };

  if (!res.ok || !data.success)
    throw new Error(data.message ?? "Could not deliver your message");
}
