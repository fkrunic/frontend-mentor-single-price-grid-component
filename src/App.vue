<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.body.className = 'font-karla bg-grayish-blue/25'
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen m-8">
    <div class="shadow-xl">
      <div class="flex flex-col items-start gap-6 w-full p-6 bg-white rounded-t-md">
        <p class="text-xl font-bold text-cyan">Join our community</p>
        <p class="font-bold text-bright-yellow text-sm">30-day hassle-free money back guarantee</p>
        <p class="text-grayish-blue text-sm leading-6">
          Gain access to our full library of tutorials
          along with expert code reviews. Perfect for any 
          developers who are serious about honing their skills.
        </p>
      </div>
      <div class="flex flex-col items-start gap-4 w-full p-6 bg-cyan">
        <p class="text-lg font-bold text-white">Monthly Subscription</p>
        <div class="flex flex-row items-center gap-2">
          <p class="text-3xl font-bold text-white">$29</p>
          <p class="text-white/50">per month</p>
        </div>
        <p class="text-white/75 -mt-3 mb-2">Full access for less than $1 a day</p>
        <p class="
          w-full 
          p-2
          
          bg-bright-yellow 
          
          text-white 
          text-center 
          
          rounded-md 
          shadow-xl">Sign Up</p>
      </div>
      <div class="flex flex-col w-full p-6 bg-cyan/80 rounded-b-md">
        <p class="text-white text-lg font-bold">Why Us</p>
        <div class="flex flex-col text-sm mt-3 text-white/50">
          <p>Tutorials by industry experts</p>
          <p>Peer & expert code review</p>
          <p>Coding exercises</p>
          <p>Access to our GitHub repos</p>
          <p>Community forum</p>
          <p>Flashcard decks</p>
          <p>New videos every week</p>
        </div>
      </div>
    </div>
  </div>
</template>