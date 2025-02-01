export const TARGET_DATE = '2025-03-01 14:14+5';

export const DAY_SUFFIXES = {
  one: 'день',
  few: 'дня',
  many: 'дней',
} as Record<Intl.LDMLPluralRule, string>;

export const HOUR_SUFFIXES = {
  one: 'час',
  few: 'часа',
  many: 'часов',
} as Record<Intl.LDMLPluralRule, string>;

export const MINUTE_SUFFIXES = {
  one: 'минута',
  few: 'минуты',
  many: 'минут',
} as Record<Intl.LDMLPluralRule, string>;

export const SECONDS_SUFFIXES = {
  one: 'секунда',
  few: 'секунды',
  many: 'секунд',
} as Record<Intl.LDMLPluralRule, string>;
