import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you! I'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "your.email@example.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "Your City, Country" },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <RevealSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to work together? I'd love to hear about your project.
          </p>
        </RevealSection>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <RevealItem index={0}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects,
                  and ways to contribute to your team's success.
                </p>
              </div>
              <div className="space-y-5">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <c.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{c.label}</h4>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealItem>

          <RevealItem index={1}>
            <div className="glass-card card-glow p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your Name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3.5 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg shadow-primary/25 font-medium group"
                >
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message
                </button>
              </form>
            </div>
          </RevealItem>
        </div>
      </div>
    </section>
  );
};

export default Contact;
