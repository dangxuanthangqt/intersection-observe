export default function IntersectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>this is a layout of intersection observe </h1>
      {children}
    </section>
  );
}
