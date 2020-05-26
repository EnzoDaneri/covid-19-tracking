<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
<title>Error - {status}</title>
</svelte:head>


{#if status === 404}
<div class="container">
<article class="message is-warning">
<div class="message-header">
<p>Page Not Found</p>
</div>
<div class="message-boddy">
<a href="/">click here</a> to go back home.
</div>

</article>
</div>
{/if}


{#if status !== 404}
<div class="container">
<article class="message is-danger">
<div class="message-header">
<p>Error</p>
</div>
<div class="message-boddy">
{error.message}
</div>

</article>
</div>

{/if}


<style>
.container {
	margin: 40px;
}
</style>