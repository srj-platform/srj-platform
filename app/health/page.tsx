import { checkSupabaseHealth } from "@/infrastructure/supabase/health";
import { organizationRepository } from "@/repositories/organization.repository";

export default async function HealthPage() {
  const health = await checkSupabaseHealth();
  const organizationCount =
    await organizationRepository.getCount();

  const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  const hasAnonKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow">

        <h1 className="text-3xl font-bold text-slate-900">
          SRJ Platform Health Check
        </h1>

        <div className="mt-8 space-y-4">

          <div className="flex items-center justify-between rounded-lg border p-4">
            <span>Environment URL</span>

            <span className={hasUrl ? "text-green-600" : "text-red-600"}>
              {hasUrl ? "✅ Loaded" : "❌ Missing"}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <span>Environment Anon Key</span>

            <span className={hasAnonKey ? "text-green-600" : "text-red-600"}>
              {hasAnonKey ? "✅ Loaded" : "❌ Missing"}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <span>Supabase Connection</span>

            <span
              className={
                health.connected
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {health.connected
                ? "✅ Connected"
                : `❌ ${health.message}`}

            </span>

          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <span>Organizations</span>

            <span className="font-semibold text-blue-600">
              {organizationCount}
            </span>
          </div>

        </div>

      </div>

    </main>
  );
}