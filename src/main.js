import App from './App.svelte';


const app = new App({
	target: document.body,
	hydrate: true
	// props: {
	// 	name: 'IPUNG DEV',
	// 	skill: 'SvelteJS Master'
	// }
});

export default app;