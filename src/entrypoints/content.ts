import { appEntry } from 'src/entry';

// eslint-disable-next-line import/no-default-export, @typescript-eslint/no-confusing-void-expression
export default defineContentScript({
  'matches': ['<all_urls>'],
  main () {
    appEntry('', 'clarity-content-script-container');
  },
  run_at: 'document_end',
});
