export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="container max-w-4xl mx-auto px-6">{children}</section>
  );
}
