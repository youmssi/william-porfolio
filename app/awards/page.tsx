import { Card, CardContent } from "@/components/ui/card";

export default function AwardsPage() {
  return (
    <>
      <div className="py-12 md:py-16 space-y-8">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">Awards</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-lg mt-4">
            Recognitions and distinctions received throughout my academic and professional journey.
          </p>
        </div>
      </div>
      <section className="py-8">
        <div className="container px-4 md:px-6 mx-auto max-w-2xl">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Best student in Marine Engineering (2016)</h2>
                <p className="text-muted-foreground text-sm">
                  Regional Maritime University Ghana.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
} 