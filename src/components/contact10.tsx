"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, MessageCircle } from "lucide-react";
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

interface Contact10Props {
  className?: string;
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

const Contact10 = ({ className, onSubmit }: Contact10Props) => {
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
    <section
      className={cn(
        "relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-linear-to-b from-amber-50 via-background to-background py-32 lg:mx-4 dark:from-amber-950",
        className,
      )}
    >
      <div className="container max-w-2xl">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
          Ready to source jute? Send us your requirements and we&apos;ll respond within one business day.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          <div>
            <h2 className="font-semibold">Office</h2>
            <p className="mt-3 text-muted-foreground">
              House 36, 1st Floor, Road 10
              <br />
              Nikunja-02, Dhaka-1229, Bangladesh
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Email us</h2>
            <div className="mt-3">
              <div>
                <p className="text-primary">Inquiries</p>
                <a
                  href="mailto:info@heritagejute.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  info@heritagejute.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold">WhatsApp</h2>
            <div className="mt-3 flex gap-6 lg:gap-10">
              <a
                href="https://wa.me/8801841111625"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <MessageCircle className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-semibold">Business Hours</h2>
          <p className="mt-3 text-muted-foreground">
            Monday – Friday: 9:00 AM – 5:00 PM (GMT+6)
          </p>
        </div>

        <DashedLine className="my-12" />

        <div className="mx-auto">
          <h2 className="text-lg font-semibold">Inquiries</h2>

          {isSubmitted && (
            <div
              className={cn(
                "mt-6 rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-center transition-opacity duration-500",
                showSuccess ? "opacity-100" : "opacity-0",
              )}
            >
              <p className="text-sm font-medium text-green-600 dark:text-green-400">
                Thank you! We'll be in touch soon.
              </p>
            </div>
          )}

          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="mt-8">
            <FieldGroup>
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
                      placeholder="First and last name"
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
                      placeholder="me@company.com"
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
                    <FieldLabel htmlFor={field.name}>Company name</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      placeholder="Company name"
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
                      placeholder="e.g. 10-50"
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
                      Your message <span className="text-destructive">*</span>
                    </FieldLabel>
                    <Textarea
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Write your message"
                      className="min-h-[120px] resize-none"
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
                  size="lg"
                  type="submit"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <LoaderIcon className="mr-2 size-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </FieldGroup>
          </form>
        </div>
      </div>
    </section>
  );
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className,
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ],
        )}
      />
    </div>
  );
};

export { Contact10 };
