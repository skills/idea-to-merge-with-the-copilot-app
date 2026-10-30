const SLUG_PATTERN = /^mona-[0-9A-Za-z]+$/;
const URL_SCHEME_PATTERN = /^[a-z][a-z0-9+.-]*:\/\//i;
const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function normalizeUrl(value) {
  const input = String(value ?? '').trim();

  if (!input) {
    throw new Error('A URL is required');
  }

  return URL_SCHEME_PATTERN.test(input) ? input : `https://${input}`;
}

export function isBookmark(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      typeof value.url === 'string' &&
      value.url.trim() &&
      typeof value.slug === 'string' &&
      SLUG_PATTERN.test(value.slug),
  );
}

export function loadBookmarks(rawValue) {
  if (typeof rawValue !== 'string' || !rawValue.trim()) {
    return [];
  }

  try {
    const parsed = JSON.parse(rawValue);
    return Array.isArray(parsed)
      ? parsed.filter(isBookmark).map(({ url, slug }) => ({ url, slug }))
      : [];
  } catch {
    return [];
  }
}

export function formatBookmark({ url, slug }) {
  return `${url} :: ${slug}`;
}

export function createSlug(seed = `${Date.now()}-${Math.random()}`) {
  let number = 0;

  for (const character of String(seed)) {
    number = (number * 31 + character.charCodeAt(0)) >>> 0;
  }

  let encoded = '';
  do {
    encoded = BASE62[number % BASE62.length] + encoded;
    number = Math.floor(number / BASE62.length);
  } while (number > 0);

  return `mona-${encoded.padStart(4, '0').slice(-8)}`;
}
