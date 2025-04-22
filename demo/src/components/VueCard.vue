<template>
  <div class="bg-gray-800 border-2 border-purple-500 rounded-lg p-6 shadow-lg hover:shadow-purple-500/20 transition-all">
    <div class="flex items-center justify-center mb-4">
      {/* Aquí va el SVG de Vue */}
    </div>
    <h2 class="text-xl font-bold text-purple-400 text-center mb-2">Componente Vue</h2>
    <p class="text-gray-300 mb-4 text-center">
      Esta es una isla interactiva construida con Vue
    </p>
    <div class="flex justify-center">
      <button 
        @click="count++"
        class="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors"
      >
        Contador: {{ count }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>