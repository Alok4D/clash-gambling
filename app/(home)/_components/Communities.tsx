import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function Communities() {
  return (
    <section className="relative bg-primary py-14 lg:py-20 xl:py-24">
      <Container>
        <div className="flex flex-col items-center">
          <h2 className="text-center text-4xl lg:text-6xl xl:text-8xl">
            We&apos;re{" "}
            <span className="inline-block bg-background h-12 rounded-full relative after:absolute after:h-2 after:rounded-full after:inset-x-4 w-25 after:bg-primary after:top-1/2 after:-translate-y-1/2"></span>{" "}
            building communities
          </h2>
          <p className="max-w-2xl mx-auto text-center mt-6">
            With a commitment to excellence and a focus on innovation, we've
            established ourselves as a leader in the real estate and
            construction industry.
          </p>
          <Button size="lg" variant="outline" className="mt-6">
            Learn More About Us...
          </Button>
        </div>
      </Container>
    </section>
  );
}
