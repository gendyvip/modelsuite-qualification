/**
 * Format a date value as a localized, human-readable string.
 * Uses the same en-US short format as existing UI (e.g. "Jun 15, 2024").
 */
export const formatDate = (raw, fallback = '—') => {
  if (!raw) return fallback;
  try {
    const d = new Date(raw);
    if (isNaN(d.getTime())) return String(raw);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return String(raw);
  }
};
