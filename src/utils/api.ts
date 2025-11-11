import { config } from '#config';
import type { SearchEntry } from '#types/database';
import { cache } from '#utils/cache';
import { PROXY_URL, type SupportedLocales } from '#utils/common';
import { logger } from '#utils/logger';

export const api = {
  search: async (locale: SupportedLocales, query?: string, types?: string[]): Promise<SearchEntry[]> => {
    let data = await customFetch<SearchEntry[]>(locale + '/' + 'search');

    if (!data) {
      return [];
    }

    if (types?.length) {
      data = data.filter(entry => {
        const type = entry.path?.split('/')[0];
        return type ? types.includes(type) : false;
      });
    }

    if (!query?.length) return data;

    query = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const regex = new RegExp(query, 'i');

    return data.filter((entry) => entry.name && regex.test(entry.name));
  },
  get: async <T>(path: string, locale: SupportedLocales): Promise<T | null> => {
    const data = await customFetch<T>(locale + '/' + path);
    return data;
  },
};

const format = (path: string) => PROXY_URL + '/' + encodeURI(path) + '.json.gz' + '?random=' + Math.random();

const customFetch = async <T>(path: string): Promise<T | null> => {
  if (cache.has(path)) {
    return cache.get(path);
  }

  let data: T | null = null;

  try {
    const headers: Record<string, string> = config.secretToken ? { 'X-Secret-Token': config.secretToken } : {};
    const response = await fetch(format(path), { headers: {
      ...headers,
      'Content-Type': 'application/json'
    } });
    if (!response.ok) {
      logger.error(`HTTP error ${response.status} while fetching ${format(path)}`);
      return null;
    }
    const result = (await response.json()) as T;
    cache.set(path, result);
    return result;
  } catch (error) {
    if (error instanceof SyntaxError) {
      logger.error(`Syntax error while fetching ${format(path)}: ${error}`);
    } else {
      logger.error(`Failed to fetch ${format(path)}: ${error}`);
    }
  }

  return null;
};
