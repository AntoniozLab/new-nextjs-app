import { BottonNav } from "@/components"

export default function ProtectedLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h2>Ruta protegida</h2>
      {children}
      <div>
        <BottonNav />
      </div>
    </>
  )
}
