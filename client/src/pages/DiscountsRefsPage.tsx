const referrals = [
  {
    name: 'TreadFi',
    url: 'https://app.tread.fi/referral/59S1TB1X',
  },
  {
    name: 'Ondo Perps',
    url: 'https://app.ondoperps.xyz/?ref=E09PVK',
    benefit: '30% discount on fees · highest discount tier available to very few partners',
  },
  {
    name: 'Entropy',
    url: 'https://entropy.io/?r=noorucn',
    benefit: 'Tier 4 · 100% fee rebate · highest partner tier',
  },
  {
    name: 'Arcus',
    url: 'https://waitlist.arcus.xyz/s/NOORUCN',
    note: true,
  },
  {
    name: 'Perpl',
    url: 'https://app.perpl.xyz/trade?ref=7ePS1KKnmvn',
  },
  {
    name: 'Robinhood Lighter',
    url: 'https://robinhoodchain.lighter.xyz/?referral=NOOR',
  },
  {
    name: 'Kalshi',
    url: 'http://kalshi.com/p/noorucn',
  },
  {
    name: 'Architect',
    url: 'https://app.architect.exchange/signup?ref=NOORUCN',
  },
  {
    name: 'Variational',
    url: 'https://omni.variational.io/?ref=OMNIOJWOEYIL',
    benefit: '12% boost',
  },
  {
    name: 'Propr',
    url: 'https://app.propr.xyz/r/nooru',
  },
  {
    name: 'RiseX',
    url: 'https://www.rise.trade/invite/noorucn',
  },
  {
    name: 'Nado',
    url: 'https://app.nado.xyz?join=uuwyzp1',
  },
  {
    name: 'Aftermath',
    url: 'https://aftermath.finance/referrals/noorucn1',
  },
  {
    name: 'Extended',
    url: 'https://app.extended.exchange/join/NOORUCN',
  },
];

function OutboundMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-4 w-4">
      <path d="M5 3.5h7.5V11M12.25 3.75 4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DiscountsRefsPage() {
  return (
    <main className="min-h-[100dvh] bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
        <header className="relative mb-10 overflow-hidden rounded-2xl border border-primary/20 bg-card px-6 py-8 sm:mb-12 sm:px-10 sm:py-11">
          <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-primary/15" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-2 -top-14 h-44 w-44 rounded-full border border-primary/15" />
          <div className="relative">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
              TreadFi Learn · Creator directory
            </p>
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Discounts <span className="text-primary">&amp; Refs</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              My referral links and available discounts, gathered in one place. Where a benefit is available, you’ll find it noted below.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/70 pt-5 text-sm text-muted-foreground">
              <span><strong className="font-semibold text-foreground">14</strong> platform links</span>
              <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-primary/70 sm:block" />
              <span><strong className="font-semibold text-foreground">3</strong> listed benefits</span>
            </div>
          </div>
        </header>

        <section aria-labelledby="directory-heading">
          <div className="mb-4 flex items-end justify-between gap-4 px-1">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Directory</p>
              <h2 id="directory-heading" className="text-xl font-semibold tracking-tight">Platform links</h2>
            </div>
            <span className="pb-0.5 font-mono text-xs tabular-nums text-muted-foreground">01 — 14</span>
          </div>

          <ol className="divide-y divide-border/80 overflow-hidden rounded-xl border border-border bg-card">
            {referrals.map((referral, index) => (
              <li
                key={referral.name}
                className="group grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 px-4 py-4 transition-colors duration-200 hover:bg-primary/[0.035] sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-x-5 sm:px-6 sm:py-[1.125rem]"
              >
                <span aria-hidden="true" className="row-span-2 pt-0.5 font-mono text-xs tabular-nums text-muted-foreground/70 sm:row-span-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[0.98rem] font-semibold tracking-tight text-foreground sm:text-base">{referral.name}</h3>
                  {referral.benefit ? (
                    <p className="mt-1.5 inline-flex max-w-full items-start gap-2 text-sm leading-snug text-primary">
                      <span aria-hidden="true" className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{referral.benefit}</span>
                    </p>
                  ) : referral.note ? (
                    <>
                      <p className="mt-1 text-sm text-muted-foreground">Referral link</p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                        <span className="font-medium text-primary">DM me on X for an access code</span>
                        <a
                          href="https://x.com/sportytechworld"
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="inline-flex items-center gap-1 text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground focus-visible:text-foreground"
                          aria-label="Message me on X for an Arcus access code (opens in a new tab)"
                        >
                          Message on X <OutboundMark />
                        </a>
                      </div>
                    </>
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">Referral link</p>
                  )}
                </div>
                <a
                  href={referral.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  aria-label={`Open ${referral.name} referral link in a new tab`}
                  className="col-start-2 mt-3 inline-flex w-fit items-center gap-2 rounded-md border border-border/90 px-3 py-2 text-sm font-medium text-foreground transition-[color,background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card sm:col-start-3 sm:row-start-1 sm:mt-0"
                >
                  Visit
                  <OutboundMark />
                </a>
              </li>
            ))}
          </ol>
        </section>

        <aside className="mt-6 flex gap-3 rounded-lg border border-border/80 bg-muted/45 px-4 py-4 sm:px-5" aria-label="Referral disclosure">
          <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/35 text-xs font-semibold text-primary">i</span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Disclosure: These are referral links. Any listed benefits are subject to each platform’s terms and eligibility; please check with the platform for current details.
          </p>
        </aside>
      </div>
    </main>
  );
}
