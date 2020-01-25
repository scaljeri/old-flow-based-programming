import App from './App.svelte';

import { applyPolyfills, defineCustomElements } from '@scaljeri/fbp/loader';
applyPolyfills().then(() => {
	defineCustomElements(window);
});

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;