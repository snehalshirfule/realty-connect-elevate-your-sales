import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs?: FAQ[];
}

const PropertyFAQ = ({ faqs = [] }: Props) => {
  if (faqs.length === 0) return null;

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-background">
      <div className="container max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-body font-medium text-primary uppercase tracking-widest mb-2">
            Common Questions
          </p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-card rounded-xl border border-border/50 shadow-sm px-5 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-sm font-heading font-semibold text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground font-body leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PropertyFAQ;
