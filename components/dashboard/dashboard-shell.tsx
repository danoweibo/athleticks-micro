interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="container flex-1 gap-12 md:grid-cols-[200px_1fr] p-6 md:grid">
        <main className="flex w-full flex-col overflow-hidden">
          <div className="flex-1 space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}