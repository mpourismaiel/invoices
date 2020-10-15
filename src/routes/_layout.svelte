<script>
  import Tailwindcss from '../components/Tailwindcss.svelte';
</script>

<Tailwindcss />

<main class="max-w-4xl mx-auto px-4 sm:px-6">
  <slot />
</main>

<style>
  :global(body) {
    font-family: Vazir;
    font-weight: normal;
  }
</style>
