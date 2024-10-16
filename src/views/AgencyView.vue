<script setup lang="ts">
import { ref } from 'vue'
import Queue from '@/assets/queue.svg'

const quantidadeDeProcessos = ref<number>()
const quantidadeGerentes = ref<number>()
const tempoPorProcesso = ref<number>()

const result = ref({
  tempoMedioTotal: 0,
  tempoMedioPorProcesso: 0,
})

function calcularTemposMedia() {
  const tempoTotal =
    quantidadeDeProcessos.value /
    (quantidadeGerentes.value * tempoPorProcesso.value)

  const tempoPorProcessoMedio = 1 / tempoPorProcesso.value

  result.value = {
    tempoMedioTotal: tempoTotal,
    tempoMedioPorProcesso: tempoPorProcessoMedio,
  }
}
</script>
<template>
  <section class="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
    <div class="h-full">
      <!-- Pay component -->
      <div>
        <!-- Card background -->
        <div class="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
          <img
            class="rounded-t shadow-lg"
            src="https://cdn.britannica.com/45/256645-159-7071E52E/Bank-building.jpg"
            width="460"
            height="180"
            alt="Pay background"
          />
        </div>
        <!-- Card body -->
        <div
          class="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto"
          x-data="{ card: true }"
        >
          <div class="bg-white px-8 pb-6 rounded-b shadow-lg">
            <!-- Card header -->
            <div class="text-center mb-6">
              <div class="mb-2">
                <img
                  class="-mt-8 inline-flex rounded-full"
                  :src="Queue"
                  width="64"
                  height="64"
                  alt="User"
                />
              </div>
              <h1 class="text-xl leading-snug text-gray-800 font-semibold mb-2">
                Filas 🔥
              </h1>
              <div class="text-sm">Forneça os dados necessários.</div>
            </div>

            <!-- Toggle -->

            <!-- Card form -->
            <div x-show="card">
              <div class="space-y-4">
                <!-- Card Number -->
                <div>
                  <label class="block text-sm font-medium mb-1" for="card-nr"
                    >Número de processos
                    <span class="text-red-500">*</span></label
                  >
                  <input
                    v-model="quantidadeDeProcessos"
                    id="card-nr"
                    class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                    type="number"
                    placeholder="Informe o número total de processos"
                  />
                </div>
                <!-- Expiry and CVC -->
                <div>
                  <label class="block text-sm font-medium mb-1" for="card-nr"
                    >Número de gerentes
                    <span class="text-red-500">*</span></label
                  >
                  <input
                    v-model="quantidadeGerentes"
                    id="card-nr"
                    class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                    type="number"
                    placeholder="Informe o número total de gerentes"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="card-nr"
                    >Tempo total para finalizaçao de um processo (em dias)
                    <span class="text-red-500">*</span></label
                  >
                  <input
                    v-model="tempoPorProcesso"
                    id="card-nr"
                    class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                    type="number"
                    placeholder="Informe o tempo total em dias"
                  />
                </div>
              </div>
              <!-- Form footer -->
              <div class="mt-6">
                <div class="mb-4">
                  <button
                    @click="calcularTemposMedia()"
                    class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2"
                  >
                    Calcular
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="
            result && result.tempoMedioTotal && result.tempoMedioPorProcesso
          "
          class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5"
        >
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src="https://b192166.smushcdn.com/192166/wp-content/uploads/2021/07/shutterstock_1891209922-3.png?lossy=2&strip=1&webp=1"
              />
            </div>
            <div class="p-8">
              <div
                class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
              >
                Resultados obtidos
              </div>
              <p>
                Tempo médio de todos os processos:
                {{ result.tempoMedioTotal }} dias
              </p>
              <p>
                Tempo de cada processo:
                {{ result.tempoMedioPorProcesso }} dias
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
