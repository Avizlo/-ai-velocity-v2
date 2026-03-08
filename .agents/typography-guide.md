# AI Velocity — Typography & Card Style Guide v2

**This guide MUST be followed for all bento grid sections and card-based layouts.**
When designing new sections, use these tiers. Do not invent ad-hoc sizes.

---

## 7-Tier Type Scale

| Tier | Token | Tailwind Classes | px | When to Use |
|------|-------|------------------|----|-------------|
| **T1** | Section Label | `font-mono text-[10px] tracking-[0.25em] uppercase text-electric-mint` | 10 | Above every section heading. Always green. |
| **T2** | Section Heading | `font-serif text-4xl md:text-5xl tracking-tight text-charcoal` | 36–48 | One per section. The biggest text on screen. |
| **T3** | Stat Number | `font-serif italic text-3xl tracking-tight` | 30 | Stat numbers, key metrics. Always serif italic. |
| **T3b** | Card Editorial Title | `font-serif italic text-2xl leading-tight tracking-tight` | 24 | Value prop headlines in CTA cards, KPI panel titles. Serif italic. |
| **T4** | Card Body | `font-sans text-sm leading-relaxed` | 14 | Descriptions, supporting copy inside cards. |
| **T5** | Stat Label | `font-sans font-normal text-sm` | 14 | Labels paired with T3 numbers. Light weight, not bold. |
| **T6** | CTA / Link | `font-sans text-xs tracking-widest uppercase` | 12 | All action links. Bottom-aligned in cards. |

### Rules
- **T3 must never exceed T2.** Card content should not compete with the section heading.
- **T5 always pairs with T3.** If there's a stat number (T3), there's a label below it (T5).
- **T3b is for editorial headlines** — value propositions, card titles that are sentences.
- **T1 is always the first element** in a section — always green (`text-electric-mint`).
- **T6 is always the last element** in a card — bottom-aligned.
- **All headlines and stat numbers use serif italic** — this is the editorial voice.

---

## Colour Opacity Rules

### Dark Card (`bg-charcoal`)
| Element | Class |
|---------|-------|
| T1 / Panel Title | `text-electric-mint` |
| T3 Stat Number | `text-white` |
| T3b Card Headline | `text-white` |
| T4 Body | `text-white/50` |
| T5 Stat Label | `text-white/70` |
| T6 Link | `text-white/40 border-white/10 hover:text-electric-mint hover:border-electric-mint/50` |
| Dividers | `border-white/[0.10]` |
| Watermark | `text-white/[0.03]` |

### Mint Card (`bg-electric-mint`)
| Element | Class |
|---------|-------|
| T1 Label | `text-charcoal/40` |
| T3 Stat Number | `text-charcoal` |
| T3b Card Headline | `text-charcoal` |
| T4 Body | `text-charcoal/60` |
| T5 Stat Label | `text-charcoal/70` |
| T6 Link | `text-charcoal border-charcoal/30 hover:text-charcoal/60` |

### Light / Glass Card (light background)
| Element | Class |
|---------|-------|
| T1 Label | `text-charcoal/30` |
| T3b Headline | `text-charcoal` |
| T4 Body | `text-charcoal/50` |
| T6 Link | `text-charcoal border-charcoal/30 hover:text-charcoal/60` |

---

## Card Layout Patterns

### KPI Panel (tall, dark, spans 2 rows)
```
flex-col structure:
├── div (title + facts grouped)
│   ├── T3b title (serif italic, green)
│   └── div.space-y-4
│       ├── fact: T3 number + T5 label + divider
│       ├── fact: T3 number + T5 label + divider
│       └── fact: T3 number + T5 label (no divider on last)
├── a.mt-auto (T6 link pinned to bottom)
└── span.absolute (watermark, bottom-right)
```

### CTA Card (dark or mint, single row)
```
flex-col justify-between structure:
├── span.absolute (watermark)
├── div (content group)
│   ├── T1 label (optional)
│   ├── T3b headline (serif italic)
│   └── T4 body text
└── T6 link (bottom)
```

### Stat Card (mint, single row)
```
flex-col justify-between structure:
├── div (top group)
│   ├── T1 label
│   └── T3 stat number (serif italic)
├── div (bottom group)
│   ├── T5 stat label
│   ├── T4 body text
│   └── T6 link
```

---

## Spacing Standards

| Property | Value |
|----------|-------|
| Card padding | `p-8` |
| Card border radius | `rounded-2xl` |
| T3 to T5 gap | `mt-1` |
| Fact group spacing | `space-y-4` |
| KPI title to facts | `mb-6` |
| Fact dividers | `border-b border-white/[0.10] pb-3` |
| Min height (single row) | `min-h-[270px]` |
| Min height (2-row span) | `min-h-[560px]` |

---

## Interaction Standards

| Element | Hover Effect |
|---------|-------------|
| All cards | `hover:-translate-y-1 hover:shadow-lg transition-all duration-300` |
| Image cards | `group-hover:scale-105 transition-transform duration-700` on `<img>` |
| CTA links (dark) | `hover:text-electric-mint hover:border-electric-mint/50 transition-colors duration-200` |
| CTA links (mint/light) | `hover:text-charcoal/60 transition-colors duration-200` |

---

## Decorative Elements

| Element | Classes |
|---------|---------|
| Section watermark (bg) | `font-serif italic text-[12vw] opacity-[0.04]` |
| Card watermark | `font-serif italic text-[3.5-4.5rem] text-white/[0.03]` (dark) or `text-charcoal/[0.06]` (mint) |
| Card ring | `ring-1 ring-charcoal/5` (light bg) or `ring-1 ring-white/5` (dark bg) |
