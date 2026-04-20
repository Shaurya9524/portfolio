"use client"

import { useEffect, useRef } from "react"
import { useAlert } from "@/context/AlertContext"
import { useForm, ValidationError } from "@formspree/react"
import styles from "./Contact.module.css"

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [{ submitting, succeeded, errors }, handleSubmit] = useForm(formId!)
  const { push } = useAlert()

  useEffect(() => {
    if (submitting) {
      push({ message: "Sending message...", variant: "info" })
    }
  }, [submitting])

  useEffect(() => {
    if (succeeded) {
      push({ message: "Thank you for your message! I will get back to you within 24 hours.", variant: "success" })
      formRef.current?.reset()
    }
  }, [succeeded])

  useEffect(() => {
    if (errors) {
      push({ message: "Failed to send message. Please try again later.", variant: "error" })
    }
  }, [errors])

  return (
    <div className={styles.form}>
      <div className={styles.formTitle}>Send a message</div>
      <div className={styles.formSub}>I will get back to you within 24 hours.</div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Project inquiry, collaboration..." />
        </div>
        <div className={styles.field}>
          <label htmlFor="msg">Message</label>
          <textarea id="msg" name="message" placeholder="Tell me about your project..." required />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={errors}
        />
        <button
          type="submit"
          className={styles.submit}
          disabled={submitting}
          style={{
            cursor: submitting ? "not-allowed" : "pointer"
          }}
        >
          Send Message {"->"}
        </button>
        <p className={styles.note}>Your message goes directly to my inbox. No spam, ever.</p>
      </form>
    </div>
  )
}
