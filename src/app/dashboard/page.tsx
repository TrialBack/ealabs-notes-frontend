import AppShell from "@/components/layout/AppShell";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Hoşgeldin!</h1>
        <p className="text-muted-foreground mt-2">Buraya notlar veya dashboard içeriği gelecek.</p>
      </div>
    </AppShell>
  );
}