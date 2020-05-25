<script>
	export let segment;
	let isOpen = false;

	function toggleNav() {
		isOpen = !isOpen;
	}
</script>

<h1>{segment}</h1>

<nav class="navbar" role="navigation" aria-label="main navigation">
<div class="navbar-brand">
<a href="/" class="navbar-item" >
<img src="covid.jpg" alt="covid-19">
</a>
<span class="navbar-burger"
class:is-active={isOpen}
on:click={toggleNav}
aria-label="menu"
aria-expanded="false">


<span  aria-hidden="true"></span>
<span  aria-hidden="true"></span>
<span  aria-hidden="true"></span>
</span>
</div>
<div class="navbar-menu" class:is-active={isOpen}>
<div class="navbar-start">
<a href="/" class="navbar-item"  class:is-active={segment === undefined}>Home</a>
<a href="/about" class="navbar-item" class:is-active={segment ==='about'}>About</a>

</div>

</div>
</nav>

<style>
@media(min-width: 769px) {
	nav {
		border-bottom: solid gray 1px;
	}
}
</style>