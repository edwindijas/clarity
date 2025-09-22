import { main } from '@/src/features/window';

export default defineContentScript({
  "matches": ["<all_urls>"],
  main,
  run_at: 'document_end',
});
