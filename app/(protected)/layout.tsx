import { BottonNav } from "@/components"

export default function ProtectedLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>
        <BottonNav />
      </div>
      <h2>Ruta protegida</h2>
      {children}

    </>
  )
}
