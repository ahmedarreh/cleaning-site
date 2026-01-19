import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function RequestForm() {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // "ok" | "err" | null

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );
      setStatus("ok");
      formRef.current.reset();
    } catch (err) {
      setStatus("err");
      console.error(err);
    }
  };

  return (
    <div className="formWrap">
      <form ref={formRef} onSubmit={onSubmit} className="form">
        
        <div >
          
        <label className="label">
        
          <input className="input" name="name" required placeholder="name" />
        </label>
</div> 
<div >
  
        <label className="label">
          
          <input className="input" name="email" type="email" required placeholder="you@email.com" />
        </label>
</div> 
<div >

        <label className="label">
          
          <input className="input" name="phone" placeholder="(###) ###-####" />
        </label>
</div>
<div >
 
        <label className="label">
          
          <input className="input" name="payment" type="payment" required placeholder="How are you going to pay?" />
        </label>
</div>  
<div >
  
        <label className="label">
          
          <textarea className="textarea" name="details" required placeholder="Message."/>
        </label>
</div> 
       
        <button className="btn" type="submit">Send Request</button>

        {status === "ok" && <div className="status ok">Request sent — we’ll get back to you soon.</div>}
        {status === "err" && <div className="status err">Something didn’t send. Check your EmailJS keys and try again.</div>}
      </form>
    </div>
  );
}