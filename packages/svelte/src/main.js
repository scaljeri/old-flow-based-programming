import App from './App.svelte';

import { defineCustomElements } from '@scaljeri/fbp/loader';
// import { applyPolyfills, defineCustomElements } from '@scaljeri/fbp/loader';
// import { applyPolyfills, defineCustomElements } from '@scaljeri/fbp/loader/cdn';

// Bind the custom elements to the window object
// applyPolyfills().then(() => {
	// defineCustomElements(window);
//   });


const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;