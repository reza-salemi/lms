export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside className="bg-gray-300 w-80 justify-center items-center">
        StudentLayout
      </aside>
      <main>{children}</main>
    </>
  );
}
