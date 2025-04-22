<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<div
  class="bg-gray-800 border-2 border-pink-500 rounded-lg p-6 shadow-lg hover:shadow-pink-500/20 transition-all"
>
  <div class="flex items-center justify-center mb-4">/* Svelte icon */</div>
  <h2 class="text-xl font-bold text-pink-400 text-center mb-2">
    Componente Svelte
  </h2>
  <p class="text-gray-300 mb-4 text-center">
    Esta es una isla interactiva construida con Svelte
  </p>
  <div class="flex justify-center">
    <button
      on:click={increment}
      class="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded transition-colors"
    >
      Contador: {count}
    </button>
  </div>
</div>
