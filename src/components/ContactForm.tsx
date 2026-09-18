"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

/**
 * Contact form.
 * This form opens the user's email client with a pre-filled message. It does
 * not store or send any data to a backend, since no backend is configured.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = [
      `Name: ${name || "(not provided)"}`,
      `Reply-to: ${email || "(not provided)"}`,
      "",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject || "Moon Phase Emoji contact"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-white">Send a Message</h2>
      <p className="mt-2 text-sm text-white/70">
        Fill out the form below and your email client will open with the
        message ready to send. Nothing is stored on our servers.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4"
        aria-label="Contact form"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label
              htmlFor="name"
              className="text-sm font-medium text-white"
            >
              Your Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 bg-white/5 border-white/15 text-white placeholder:text-white/40"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="text-sm font-medium text-white"
            >
              Your Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 bg-white/5 border-white/15 text-white placeholder:text-white/40"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <Label
            htmlFor="subject"
            className="text-sm font-medium text-white"
          >
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1.5 bg-white/5 border-white/15 text-white placeholder:text-white/40"
            placeholder="Question about the Moon phase"
          />
        </div>

        <div>
          <Label
            htmlFor="message"
            className="text-sm font-medium text-white"
          >
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="mt-1.5 bg-white/5 border-white/15 text-white placeholder:text-white/40"
            placeholder="Tell me what is on your mind."
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            By sending this message you agree to be contacted at the email
            you provide.
          </p>
          <Button
            type="submit"
            className="bg-gradient-to-r from-[oklch(0.92_0.06_75)] to-[oklch(0.85_0.12_75)] text-[oklch(0.12_0.02_270)] hover:opacity-90"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
