"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  GlobeIcon,
  LoaderIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";

interface ContactFormDetailsProps {
  title: string;
  description: string;
  phone: string;
  email: string;
  web: { label: string; url: string };
  formHeading: string;
  corporateHeading: string;
  addressLine1: string;
  addressLine2: string;
  contactHeading: string;
  socialHeading: string;
  socialLinks: {
    network: "facebook" | "twitter" | "linkedin";
    url: string;
  }[];
  successMessage: string;
  submitLabel: string;
  submittingLabel: string;
  className?: string;
}

interface Contact11Props extends ContactFormDetailsProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
}
type Props = Partial<Contact11Props>;

const defaultProps: Contact11Props = {
  title: "Contact Us",
  description:
    "Building with shadcn/ui and Tailwind? Ask us about blocks, components, or copy-paste sections—we read every message.",
  phone: "+1 (555) 010-2400",
  email: "hello@shadcnblocks.com",
  web: {
    label: "shadcnblocks.com",
    url: "https://www.shadcnblocks.com",
  },
  corporateHeading: "Corporate office",
  addressLine1: "1200 Framework Boulevard",
  addressLine2: "San Francisco, CA 94102, United States",
  contactHeading: "Get in touch",
  socialHeading: "Follow us",
  socialLinks: [
    { network: "facebook", url: "https://www.facebook.com" },
    { network: "twitter", url: "https://x.com" },
    { network: "linkedin", url: "https://www.linkedin.com" },
  ],
  formHeading: "Inquiries",
  successMessage: "Thanks — we will get back to you shortly.",
  submitLabel: "Send message",
  submittingLabel: "Sending…",
};

const contactFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  company: z.string().optional(),
  employees: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const SOCIAL_ICON = {
  facebook: FaFacebook,
  twitter: FaXTwitter,
  linkedin: FaLinkedin,
} as const;

const SOCIAL_LABEL: Record<
  ContactFormDetailsProps["socialLinks"][number]["network"],
  string
> = {
  facebook: "Facebook",
  twitter: "X",
  linkedin: "LinkedIn",
};

const Contact11 = (props: Props) => {
  const {
    title,
    description,
    corporateHeading,
    addressLine1,
    addressLine2,
    phone,
    email,
    web,
    contactHeading,
    socialHeading,
    socialLinks,
    formHeading,
    successMessage,
    submitLabel,
    submittingLabel,
    className,
    onSubmit,
  } = { ...defaultProps, ...props };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      employees: "",
      message: "",
    },
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        console.log("Form submitted:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setIsSubmitted(true);
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 4500);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      form.setError("root", {
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 text-left">
            <h1 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground lg:text-xl lg:text-balance">
              {description}
            </p>
          </div>

          <div className="mt-10 flex gap-10 max-md:flex-col md:mt-16 md:gap-0 md:divide-x md:divide-border">
            <div className="space-y-10 md:pr-10">
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-balance">
                  {corporateHeading}
                </h2>
                <p className="mt-3 font-medium tracking-tight text-muted-foreground">
                  {addressLine1}
                  <br />
                  {addressLine2}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold tracking-tight text-balance">
                  {contactHeading}
                </h2>
                <div className="mt-3 flex flex-col gap-6">
                  <a
                    href={`tel:${phone}`}
                    className="group flex items-center gap-3 font-medium tracking-tight text-muted-foreground hover:text-foreground"
                  >
                    <PhoneIcon className="size-5 shrink-0 text-muted-foreground" />
                    <span className="group-hover:underline">{phone}</span>
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="group flex items-center gap-3 font-medium tracking-tight text-muted-foreground hover:text-foreground"
                  >
                    <MailIcon className="size-5 shrink-0 text-muted-foreground" />
                    <span className="group-hover:underline">{email}</span>
                  </a>
                  <a
                    href={web.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${web.label} (opens in new tab)`}
                    className="group flex items-center gap-3 font-medium tracking-tight text-muted-foreground hover:text-foreground"
                  >
                    <GlobeIcon className="size-5 shrink-0 text-muted-foreground" />
                    <span className="group-hover:underline">{web.label}</span>
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold tracking-tight text-balance">
                  {socialHeading}
                </h2>
                <div className="mt-3 flex gap-6">
                  {socialLinks.map((link) => {
                    const Icon = SOCIAL_ICON[link.network];
                    return (
                      <a
                        key={`${link.network}-${link.url}`}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${SOCIAL_LABEL[link.network]} (opens in new tab)`}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Icon className="size-6" aria-hidden />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex-1 md:pl-10">
              <h2 className="text-lg font-semibold tracking-tight text-balance">
                {formHeading}
              </h2>

              {isSubmitted && (
                <div
                  className={cn(
                    "mt-5 rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-center transition-opacity duration-500",
                    showSuccess ? "opacity-100" : "opacity-0",
                  )}
                >
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    {successMessage}
                  </p>
                </div>
              )}

              <form
                onSubmit={form.handleSubmit(handleFormSubmit)}
                className="mt-5"
              >
                <FieldGroup className="gap-6">
                  <Controller
                    control={form.control}
                    name="fullName"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Full name <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Jordan Rivera"
                          className="bg-background"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Work email address{" "}
                          <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          type="email"
                          aria-invalid={fieldState.invalid}
                          placeholder="you@company.com"
                          className="bg-background"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>
                          Company name
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          placeholder="Optional"
                          className="bg-background"
                        />
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="employees"
                    render={({ field }) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>
                          Number of employees
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          placeholder="e.g. 10–50"
                          className="bg-background"
                        />
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="message"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Your message{" "}
                          <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Textarea
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Tell us what you are building…"
                          className="min-h-[120px] resize-none bg-background"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  {form.formState.errors.root && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.root.message}
                    </p>
                  )}

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <LoaderIcon
                          className="size-4 animate-spin"
                          aria-hidden
                        />
                      ) : null}
                      {form.formState.isSubmitting
                        ? submittingLabel
                        : submitLabel}
                    </Button>
                  </div>
                </FieldGroup>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact11 };
