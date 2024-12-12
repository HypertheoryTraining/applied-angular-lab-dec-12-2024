import { BookEntity } from '../../types';
// Note: Put this here because this is something I'd DEFINITELY want unit tests for.
export function deriveStatsFromBooks(entities: BookEntity[]) {
  const totalPages = entities.reduce((p, b) => p + b.pages, 0);
  const total = entities.length;
  const averagePages = Math.round(totalPages / total);
  const earliestYear = entities.reduce(
    (p, b) => (b.year < p ? b.year : p),
    Number.MAX_SAFE_INTEGER,
  );
  const latestYear = entities.reduce(
    (p, b) => (b.year > p ? b.year : p),
    Number.MIN_SAFE_INTEGER,
  );
  return {
    total,
    earliest:
      earliestYear < 0 ? Math.abs(earliestYear) + ' BC' : earliestYear + ' AD',
    latest: latestYear >= 0 ? latestYear + ' AD' : Math.abs(latestYear) + ' BC',
    averagePages,
  };
}
