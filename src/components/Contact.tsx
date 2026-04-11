import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Query Submitted!", description: "Message received. I'll get back to you soon." });
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
    <section id="contact" className="py-32 bg-background relative overflow-hidden z-0">
      
      {/* Immersive background depth (Static, no bounce) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6">
        <RevealSection className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-foreground mb-6 font-mono tracking-tighter">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(var(--primary),0.4)]" />
          <p className="text-muted-foreground font-mono text-[15px] max-w-2xl mx-auto">
            ## System.out.println("Ready to collaborate.");
          </p>
        </RevealSection>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          
          {/* Left Column: Contact Details */}
          <RevealItem index={0}>
            <div className="space-y-10 lg:pr-8">
              <div>
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/80 mb-6 tracking-tight flex items-center gap-3">
                  <MessageSquare size={28} className="text-primary" /> Let's Connect
                </h3>
                <p className="text-muted-foreground leading-loose text-[16px]">
                  I am always open to discussing new engineering opportunities, complex builds,
                  and ways to architect scalable solutions for your immediate needs. 
                  Drop a query and let's compile something great.
                </p>
              </div>
              
              <div className="space-y-4 pt-2">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-center gap-5 p-5 rounded-2xl bg-secondary/30 border border-border/40 hover:bg-secondary/60 hover:border-border/60 transition-colors duration-500">
                    <div className="w-14 h-14 rounded-xl bg-background border border-border/50 flex items-center justify-center shadow-inner">
                      <c.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-[13px] font-mono tracking-wider mb-1 uppercase opacity-80">{c.label}</h4>
                      <p className="text-primary/90 font-semibold text-[15px] tracking-wide">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealItem>

          {/* Right Column: Premium Contact Form */}
          <RevealItem index={1}>
            <div className="relative group/form">
              {/* Soft, stationary ambient under-glow for premium depth */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur-[20px] opacity-50 group-hover/form:opacity-100 transition-opacity duration-1000 -z-10"></div>
              
              <div className="bg-card/70 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-white/10 dark:border-white/5 shadow-2xl relative overflow-hidden">
                
                {/* Crisp top accent border line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                {/* IDE Window Controls */}
                <div className="flex gap-2 mb-8 pb-5 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-destructive shadow-[0_0_10px_rgba(var(--destructive),0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(var(--accent),0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { id: "name", label: "Name", type: "text", placeholder: "Your Name" },
                      { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-[13px] font-semibold text-primary/80 mb-2 font-mono tracking-tight">{field.label}</label>
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-background/50 border border-border/50 rounded-xl focus:bg-background focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 text-foreground placeholder:text-muted-foreground/60 text-[15px] font-mono shadow-inner outline-none"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-[13px] font-semibold text-primary/80 mb-2 font-mono tracking-tight">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-4 bg-background/50 border border-border/50 rounded-xl focus:bg-background focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 resize-none text-foreground placeholder:text-muted-foreground/60 text-[15px] font-mono shadow-inner outline-none"
                      placeholder="Describe your requirements here..."
                    />
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="relative w-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] hover:bg-[position:100%_0] text-white font-bold tracking-wide px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(var(--primary),0.25)] hover:shadow-[0_0_40px_rgba(var(--primary),0.6)] border border-white/20 transition-all duration-700 flex items-center justify-center gap-2 overflow-hidden group"
                    >
                      <Send size={18} className="opacity-90 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm" /> 
                      <span className="drop-shadow-sm">Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </RevealItem>

        </div>
      </div>
    </section>
  );
};

export default Contact;
