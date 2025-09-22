import { defineWebExtConfig } from 'wxt';

console.log('Using custom web-ext.config.ts');

export default defineWebExtConfig({
   startUrls: ['https://www.edwin-chiwona.com'],
   chromiumProfile: 'C:\\Users\\Edwin Chiwona\\Projects\\clarity\\.wxt\\chrome-profile',
   keepProfileChanges: true,
});