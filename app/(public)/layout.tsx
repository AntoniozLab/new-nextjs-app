
export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Public Layout</h1>
      {children}
    </div>
  );
}
