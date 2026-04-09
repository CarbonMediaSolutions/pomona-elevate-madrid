

# Add Progress Tracker to AI Page Generation Step

## Problem
Step 3 (AI layout generation) shows only a static spinner with no sense of progress, making long waits feel indefinite.

## Solution
Add a simulated multi-phase progress tracker that cycles through descriptive status messages with a progress bar. Since the edge function call is a single async request (no real intermediate progress), we simulate phases that give the user confidence something is happening.

## Progress Phases
1. "Analyzing your description..." (0–25%)
2. "Selecting section types..." (25–50%)
3. "Generating content..." (50–75%)
4. "Finalizing layout..." (75–90%)
5. Completes to 100% when the response arrives

## Implementation

### File: `src/components/admin/CreatePageWizard.tsx`

- Add two state variables: `progress` (number 0–100) and `progressMessage` (string)
- When entering step 3, start an interval timer that advances `progress` by ~12% every 2 seconds and cycles through the phase messages above, capping at 90%
- When `generateLayout()` completes successfully, set progress to 100% briefly before advancing to step 4
- Clear the interval on completion or error
- Replace the current step 3 UI (just a spinner + single line) with:
  - The current phase message (animated text)
  - A `Progress` bar component (from shadcn/ui) showing the percentage
  - A subtle percentage label

Uses the existing `src/components/ui/progress.tsx` component — no new dependencies.

