<template>
  <div class="bg-gray-800 border-2 border-green-500 rounded-lg p-6 shadow-lg hover:shadow-green-500/20 transition-all">
    <div class="flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="91" height="91">
        <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/>
        <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>
      </svg>
    </div>
    <h2 class="text-xl font-bold text-green-400 text-center mb-2">Componente Vue</h2>
    <p class="text-gray-300 mb-4 text-center">
      Esta es una isla construida con Vue
    </p>
    <div class="flex justify-center">
      <button
        @click="count++"
        class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
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