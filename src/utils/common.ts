import { OAuth2Scopes, PermissionFlagsBits } from 'discord-api-types/v10';

export type DiscordPermissions = keyof typeof PermissionFlagsBits;

export const BOT_PERMISSIONS = {
  scopes: [OAuth2Scopes.ApplicationsCommands, OAuth2Scopes.Bot],
  permissions: [PermissionFlagsBits.ManageWebhooks, PermissionFlagsBits.EmbedLinks],
};

export const DATABASE_URL = 'https://dune.gaming.tools';

export const PROXY_URL = 'https://proxy.wali.glazk0.dev';

export const KO_FI_URL = 'https://ko-fi.com/glazk0';

export const DEVELOPERS = [
  // glazk0
  '247344130798256130',
];

export const SUPPORTED_LOCALES = [
  'en',
  'de',
  'es',
  'fr',
  'it',
  'ja',
  'ko',
  'pl',
  'pt-br',
  'ru',
  'tr',
  'uk',
  'zh-cn',
  'zh-tw',
] as const;

export type SupportedLocales = (typeof SUPPORTED_LOCALES)[number];

export const SUPPORTED_LOCALES_NAMES: Record<SupportedLocales, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  pl: 'Polski',
  'pt-br': 'Português (Brasil)',
  ru: 'Русский',
  tr: 'Türkçe',
  uk: 'Українська',
  'zh-cn': '中文（中国）',
  'zh-tw': '中文（台灣）',
};

export const isSupportedLocale = (lang: string): lang is SupportedLocales =>
  SUPPORTED_LOCALES.includes(lang as SupportedLocales);

export const truncateArray = <T>(arr: T[], length: number): Array<T | string> => {
  if (arr.length <= length) {
    return arr;
  }

  const truncatedArray = arr.slice(0, length);
  const remaining = arr.length - length;

  return [...truncatedArray, `and ${remaining} more`];
};

export const databaseUrl = (locale: SupportedLocales, path: string): string => {
  return `${DATABASE_URL}/${locale}/${path}?ref=wali`;
};
