export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-[var(--frame-outer)] pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] md:px-5 md:pb-5 md:pt-5">
      <div className="relative min-h-[calc(100dvh-1.5rem-env(safe-area-inset-top)-env(safe-area-inset-bottom))] rounded-[1.35rem] border border-white/20 bg-[var(--background)] shadow-[0_32px_90px_-24px_rgba(26,61,52,0.45)] sm:rounded-[1.75rem] md:min-h-[calc(100dvh-2.5rem)] md:rounded-[2.75rem]">
        {children}
      </div>
    </div>
  );
}
