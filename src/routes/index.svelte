<script context="module" lang="ts">
	export const prerender = true;
</script>

<div class="p-8">
	<header class="mb-8">
		<h1 class="text-2xl mb-4">Welcome to Svic Svac Svoe</h1>
		<h2 class="text-xl">A svelte implementation of Tic Tac Toe</h2>
	</header>
	<main>
		<div>
			<form action="">
				<p>Start a new game</p>
				<button type="submit" class="p-2 bg-gray-50">Create game</button>
			</form>
		</div>
		<div>
			<p>Or</p>
		</div>
		<div>
			<form action="">
				<p>Join an existing game</p>
				<input type="text" placeholder="Room id" class="border p-2 block" />
				<button type="submit" class="p-2 bg-gray-50">Join game</button>
			</form>
		</div>
	</main>
</div>
