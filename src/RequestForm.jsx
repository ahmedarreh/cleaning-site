import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

export default function RequestForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const adminTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN;
  const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTOREPLY;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    console.log("EmailJS config:", {
      hasServiceId: !!serviceId,
      hasAdminTemplateId: !!adminTemplateId,
      hasAutoReplyTemplateId: !!autoReplyTemplateId,
      hasPublicKey: !!publicKey,
    });

    if (!serviceId || !adminTemplateId || !autoReplyTemplateId || !publicKey) {
      console.error("Missing EmailJS env vars. Check your .env file.");
      setStatus("err");
      return;
    }

    try {
      // 1) Send notification to YOU
      await emailjs.sendForm(serviceId, adminTemplateId, formRef.current, {
        publicKey,
      });

      // 2) Send auto-reply to CLIENT
      await emailjs.sendForm(serviceId, autoReplyTemplateId, formRef.current, {
        publicKey,
      });

      setStatus("ok");
      formRef.current?.reset();
    } catch (err) {
      setStatus("err");
      console.error("EmailJS error:", err?.text || err);
    }
  };

  return (
    <div className="formWrap">
      <form ref={formRef} onSubmit={onSubmit} className="form">
        <label className="label">
          <input className="input" name="from_name" required placeholder="Name" />
        </label>

        <label className="label">
          <input className="input" name="reply_to" type="email" required placeholder="you@email.com" />
        </label>

        <label className="label">
          <input className="input" name="phone" placeholder="(###) ###-####" />
        </label>

        <label className="label">
          <input className="input" name="payment" type="text" required placeholder="How are you going to pay?" />
        </label>

        <label className="label">
          <textarea className="textarea" name="message" required placeholder="Message." />
        </label>

        <button className="btn" type="submit">Send Request</button>

        {status === "ok" && (
          <div className="status ok">Request sent — we’ll get back to you soon.</div>
        )}
        {status === "err" && (
          <div className="status err">Something didn’t send. Check console for error.</div>
        )}
      </form>
    </div>
  );
}