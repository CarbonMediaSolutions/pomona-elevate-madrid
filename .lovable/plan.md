

# Castilian Spanish Translation Overhaul

Based on the native speaker's feedback (from the screenshots), the Spanish translations need several systematic fixes to sound natural in Castilian Spanish rather than Latin American or overly literal.

## Key Issues Identified

1. **"Membresías" → "Suscripciones"** — Throughout the entire site, replace "membresía/membresías" with "suscripción/suscripciones". This is the most prominent issue flagged.

2. **"Recarga" sounds awkward** — "Recarga" as a pillar verb for "Refuel" feels mechanical. Replace with something warmer like "Nutre" or "Repón fuerzas".

3. **"Ambición compartida y ritual diario"** — Overly literal. Rewrite to flow naturally: e.g., "un objetivo común y una rutina que merece la pena".

4. **"Convertirse" → "Conviértete"** — Use direct tú imperative throughout. The site should speak directly to the user in second person informal, not use infinitives or reflexive forms.

5. **Verbs ending in -ar (infinitives)** — Too many CTA buttons and headings use infinitive form ("Explorar", "Reservar", "Comparar"). In Castilian Spanish for a premium brand speaking to the user, these should be imperatives: "Explora", "Reserva", "Compara".

6. **General Latin American patterns to fix:**
   - "Aplica" vs "Solicita" 
   - Phrasing that feels translated from English rather than written natively in Castilian

## Scope of Changes

**Single file: `src/i18n/es.json`** — Full pass through all ~497 lines.

### Systematic replacements:
- All instances of "membresía(s)" → "suscripción/suscripciones"
- All CTA infinitives → tú imperatives ("Explorar" → "Explora", "Reservar" → "Reserva", "Comparar" → "Compara", "Ver" → "Consulta/Mira")
- "Recarga" pillar → "Nutre" or "Repón fuerzas"
- "ambición compartida" → more natural Castilian phrasing
- "Explorar Membresías" → "Descubre las Suscripciones" or "Explora Suscripciones"
- "Ver Membresías" → "Ver Suscripciones"
- Navigation: "Membresías" → "Suscripciones"
- Review all body copy for awkward literal translations and rephrase in natural Castilian
- Ensure consistent tuteo (tú form) throughout — no usted, no infinitive-as-imperative

### Specific rewrites flagged:
- `brand.connectDesc`: "ambición compartida y el ritual diario" → more natural
- `brand.refuel` / `brand.refuelDesc`: "Recarga" → better verb
- `hero.cta2`: "Explorar Membresías" → "Explora las Suscripciones"
- `membership.tag`: "Membresías" → "Suscripciones"
- All membership CTA buttons
- Footer links referencing memberships
- FAQ answers mentioning memberships
- Article content mentioning memberships

This is a content-only change — no component or structural code changes needed.

