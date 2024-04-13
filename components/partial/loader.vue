<template>
  <!-- Loader template like youtube -->
  <div class="min-h-[60vh] p-4 w-full">
    <div class="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4">
      <div v-for="i in 8" :key="i" class="w-full border rounded-md min-h-48">
        <div class="flex justify-between p-4 gap-4 items-center">
          <div class="border h-20 w-20 rounded-full bg-slate-100"></div>
          <div class="flex-1 flex flex-col gap-2">
            <div v-for="item in 4" :key="item" :class="[
              'border',
              'w-full',
              'rounded-md',
              'animate-pulse',
              'bg-gray-200',
              'opacity-50',
              'rounded-md',
            ]" :style="{ width: 4 - item * 20 + '%', }" class="h-2"></div>
          </div>
        </div>
        <div class="p-4 flex flex-col gap-4">
          <div v-for="item in 3" :key="item" :class="[
            'border',
            'w-full',
            'rounded-md',
            'animate-pulse',
            'bg-gray-200',
            'opacity-50',
            'rounded-md',
          ]" class="h-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
