import { ContactSection } from "@/components/contact-section";

export default function ContactPage() {
  return (
    <>
      <div className="py-12 md:py-16 space-y-8">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">Contact</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-lg mt-4">
            Get in touch to discuss projects, collaborations, or opportunities
          </p>
        </div>
      </div>
      
      <ContactSection />
    </>
  );
} 