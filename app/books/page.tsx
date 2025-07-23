import { Card, CardContent } from "@/components/ui/card";

const books = [
  {
    title: "UNTAPPED REALMS: Unveiling the Hidden Dimensions of the Spirit",
    price: 90,
    currency: "$",
    image: "/images/books/UNTAPPED REALM COVER PAGE.jpg"
  },
  {
    title: "THE REALMS OF DIVINE KNOWLEDGE: (EXPLORING THE DEPTHS OF GOD'S MYSTERIES)",
    price: 60,
    currency: "$",
    image: "/images/books/Final REALM OF DEVINE KNOWLEDGE.jpg"
  },
  {
    title: "The Celestial Academy: (Five Divine Training Dimensions)",
    price: 15,
    currency: "$",
    image: "/images/books/Final The Celestrial Academy.jpg"
  }
];

export default function BooksPage() {
  return (
    <>
      <div className="py-12 md:py-16 space-y-8">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">Books</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-lg mt-4">
            Discover my published books exploring spiritual and divine knowledge.
          </p>
        </div>
      </div>
      <section className="py-8">
        <div className="container px-4 md:px-6 mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book, idx) => (
            <Card key={idx} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col flex-1 justify-between">
                {book.image && (
                  <div className="w-full h-48 mb-4 flex items-center justify-center bg-muted rounded">
                    <img src={book.image} alt={book.title} className="object-contain h-full max-w-full" />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-primary">{book.title}</h2>
                </div>
                <div className="mt-4">
                  <span className="inline-block bg-primary text-primary-foreground rounded-full px-4 py-2 text-lg font-bold shadow">
                    {book.price}{book.currency}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
} 