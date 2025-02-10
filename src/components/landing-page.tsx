import { Container } from '@/components/ui/container'

export function LandingPage() {
  return (
    <main className="flex-1">
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen py-12">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to Your Site</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Start building your landing page here
          </p>
        </div>
      </Container>
    </main>
  )
}