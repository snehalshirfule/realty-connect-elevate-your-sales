import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PropertyData } from "@/types/property";
import { Send, CheckCircle2 } from "lucide-react";

interface Props {
  data: PropertyData;
  variant?: "inline" | "card" | "fullwidth";
  id?: string;
}

const PropertyEnquiryForm = ({ data, variant = "card", id = "enquiry-form" }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const showMessage = variant !== "inline";

  if (submitted) {
    return (
      <div id={id} className={`${variant === "fullwidth" ? "py-12 md:py-16 px-4 sm:px-6 bg-surface-teal" : ""}`}>
        <div className={`${variant === "card" ? "bg-background rounded-2xl shadow-card border border-border/50 p-6 md:p-8" : variant === "fullwidth" ? "container max-w-xl mx-auto text-center" : ""}`}>
          <div className="flex flex-col items-center gap-3 py-8">
            <CheckCircle2 className="w-12 h-12 text-primary" />
            <h3 className="font-heading font-bold text-foreground text-lg">Thank You!</h3>
            <p className="text-sm text-muted-foreground font-body">Our team will reach out to you shortly.</p>
          </div>
        </div>
      </div>
    );
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          placeholder="Full Name *"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="rounded-xl bg-muted/50 border-border/50 font-body"
        />
        <Input
          placeholder="Phone Number *"
          type="tel"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="rounded-xl bg-muted/50 border-border/50 font-body"
        />
      </div>
      <Input
        placeholder="Email Address"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="rounded-xl bg-muted/50 border-border/50 font-body"
      />
      {showMessage && (
        <Textarea
          placeholder="I'm interested in…"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="rounded-xl bg-muted/50 border-border/50 font-body min-h-[80px]"
        />
      )}
      <Button type="submit" className="w-full rounded-xl font-heading font-semibold" size="lg">
        <Send className="w-4 h-4 mr-2" />
        Send Enquiry
      </Button>
      <p className="text-[11px] text-muted-foreground font-body text-center">
        By submitting, you agree to our privacy policy. We respect your data.
      </p>
    </form>
  );

  if (variant === "fullwidth") {
    return (
      <section id={id} className="py-12 md:py-16 px-4 sm:px-6 bg-surface-teal">
        <div className="container max-w-xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-body font-medium text-primary uppercase tracking-widest mb-2">Get in Touch</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Interested in {data.projectName}?
            </h2>
            <p className="text-sm text-muted-foreground font-body mt-2">
              Fill in your details and our team will connect with you within 30 minutes.
            </p>
          </div>
          <div className="bg-background rounded-2xl shadow-card border border-border/50 p-6 md:p-8">
            {formContent}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "card") {
    return (
      <div id={id} className="bg-background rounded-2xl shadow-card border border-border/50 p-5 md:p-6">
        <h3 className="font-heading font-bold text-foreground text-base mb-1">Get Instant Details</h3>
        <p className="text-xs text-muted-foreground font-body mb-4">Our team responds within 30 minutes</p>
        {formContent}
      </div>
    );
  }

  return <div id={id}>{formContent}</div>;
};

export default PropertyEnquiryForm;
