<script>
	import { goto } from '@sapper/app'
	import AuthService from '../services/auth';
	import Loader from '../components/Loader.svelte';
	import { isAuthenticated } from '../stores/auth';

	(async () => {
		const isUserAuthenticated = await AuthService.auth();

		isAuthenticated.update(() => (isUserAuthenticated));

		if (isUserAuthenticated) {
			goto('tasks');
		} else {
			goto('login');
		}
	})()
</script>

<style>
	.loader-container {
		height: 100%;
		display: flex;
		justify-content: center;
  	align-items: center;
	}
</style>

<div class="loader-container">
	<Loader/>
</div>
