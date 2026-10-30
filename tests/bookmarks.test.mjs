import assert from 'node:assert/strict';
import test from 'node:test';
import { formatBookmark, loadBookmarks, normalizeUrl } from '../src/lib/bookmarks.mjs';

test('normalizes URLs with and without https:// to the same value', () => {
  assert.equal(normalizeUrl('example.com/docs'), 'https://example.com/docs');
  assert.equal(normalizeUrl('https://example.com/docs'), 'https://example.com/docs');
});

test('recovers from empty, corrupted, legacy, and non-array storage values', () => {
  assert.deepEqual(loadBookmarks(null), []);
  assert.deepEqual(loadBookmarks(''), []);
  assert.deepEqual(loadBookmarks('{not-json'), []);
  assert.deepEqual(loadBookmarks(JSON.stringify({ url: 'https://legacy.example', slug: 'mona-old' })), []);
  assert.deepEqual(loadBookmarks(JSON.stringify(['legacy string'])), []);
  assert.deepEqual(
    loadBookmarks(JSON.stringify([
      { url: 'https://valid.example', slug: 'mona-7fk2' },
      { url: 'missing-slug' },
      { url: 'https://bad.example', slug: 'not-a-mona-slug' },
    ])),
    [{ url: 'https://valid.example', slug: 'mona-7fk2' }],
  );
});

test('formats a saved bookmark with the exact separator', () => {
  assert.equal(
    formatBookmark({ url: 'https://www.example.com', slug: 'mona-7fk2' }),
    'https://www.example.com :: mona-7fk2',
  );
});
