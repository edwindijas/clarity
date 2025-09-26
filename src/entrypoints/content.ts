import { appEntry } from "src/entry";

export default defineContentScript({
  "matches": ["<all_urls>"],
  main () {
    appEntry('/', "my-extension-entrypoint",);
  },
  run_at: 'document_end',
});
