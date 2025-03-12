export const TARGET_DATE = '2025-03-01T09:14:00.000Z';

export const YEAR_SUFFIXES = {
  one: 'год',
  few: 'года',
  many: 'лет',
} as Record<Intl.LDMLPluralRule, string>;

export const MONTH_SUFFIXES = {
  one: 'месяц',
  few: 'месяца',
  many: 'месяцев',
} as Record<Intl.LDMLPluralRule, string>;

export const DAY_SUFFIXES = {
  one: 'день',
  few: 'дня',
  many: 'дней',
} as Record<Intl.LDMLPluralRule, string>;
