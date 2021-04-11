export enum Recurring {
  ONCE = "once",
  MONTHLY = "monthly"
}

export const CORONA_COSTS = [
  {
    name: "Entwicklungskosten der App",
    recurring: Recurring.ONCE,
    vendor: "SAP",
    cost: 7.15 * 1000 * 1000
  },
  {
    name: "Entwicklungskosten der Infrastruktur",
    recurring: Recurring.ONCE,
    vendor: "Telekom / T-Systems",
    cost: 7.8 * 1000 * 1000
  },
  {
    name: "Bereitstellung der Infrastruktur (+Hotline)",
    recurring: Recurring.MONTHLY,
    recurringSince: new Date(2020, 6, 16),
    vendor: "Telekom / T-Systems",
    cost: 2.5 * 1000 * 1000
  },
  {
    name: "Marketing (Zeitungen, Plakate, Fernsehwerbung)",
    recurring: Recurring.ONCE,
    vendor: "Verschiedene",
    cost: 18.7 * 1000 * 1000
  },
]
