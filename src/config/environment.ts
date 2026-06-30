export const ENV = {
  appName: process.env.NEXT_PUBLIC_APP_NAME ?? "SRJ Platform",

  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",

  nodeEnv: process.env.NODE_ENV,

  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,

  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
} as const;