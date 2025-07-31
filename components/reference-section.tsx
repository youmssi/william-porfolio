import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export type Reference = {
  name: string;
  title: string;
  department: string;
  institution: string;
  mobile: string;
  whatsapp?: string;
  email: string;
  profile?: { label: string; url: string };
  professionalIds?: { label: string; value: string }[];
  researchInterest?: string;
};

export function ReferenceSection({ references }: { references: Reference[] }) {
  return (
    <section className="py-16 bg-muted/50" id="references">
      <div className="container px-4 md:px-6 mx-auto max-w-2xl space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">References</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Academic and professional references supporting my career and research.
            </p>
          </div>
        </div>
        {references.map((ref, idx) => (
          <Card key={idx}>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold">{ref.name}</h3>
                <p className="text-muted-foreground text-sm">{ref.title}<br/>
                  {ref.department}<br/>
                  {ref.institution}</p>
                <Separator className="my-2" />
                {ref.whatsapp ? (
                  <p className="text-sm"><b>Mobile:</b> <a href={ref.whatsapp} className="text-primary hover:underline" target="_blank" rel="noopener">{ref.mobile} (WhatsApp)</a></p>
                ) : (
                  <p className="text-sm"><b>Mobile:</b> {ref.mobile}</p>
                )}
                <p className="text-sm"><b>Email:</b> <a href={`mailto:${ref.email}`} className="text-primary hover:underline">{ref.email}</a></p>
                {ref.profile && ref.profile.url && ref.profile.label && (
                  <p className="text-sm"><b>Vidwan | Profile Page:</b> <a href={ref.profile.url} className="text-primary hover:underline" target="_blank" rel="noopener">{ref.profile.label}</a></p>
                )}
                {ref.professionalIds && ref.professionalIds.length > 0 && (
                  <>
                    <Separator className="my-2" />
                    <div className="text-sm">
                      <b>Professional IDs:</b><br/>
                      {ref.professionalIds.map((id, i) => (
                        <span key={i}>{id.label}: {id.value}<br/></span>
                      ))}
                    </div>
                  </>
                )}
                {ref.researchInterest && (
                  <>
                    <Separator className="my-2" />
                    <div className="text-sm">
                      <b>Research Interest:</b><br/>
                      {ref.researchInterest}
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 