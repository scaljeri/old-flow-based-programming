import App from './App.svelte';

import { applyPolyfills, defineCustomElements } from '@scaljeri/fbp/loader';
console.log('load sencil');
applyPolyfills().then(() => {
	console.log('load sencil');
	defineCustomElements(window);
});

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;