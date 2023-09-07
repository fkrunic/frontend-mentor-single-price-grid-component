<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.body.className = 'font-karla'
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="flex flex-col items-start">
      <p>Join our community</p>
      <p>30-day hassle-free money back guarantee</p>
      <p>
        Gain access to our full library of tutorials
        along with expert code reviews. Perfect for any 
        developers who are serious about honing their skills.
      </p>
    </div>
    <div class="flex flex-col items-start">
      <p>Monthly Subscription</p>
      <div class="flex flex-row">
        <p>$29</p>
        <p>per month</p>
      </div>
      <p>Full access for less than $1 a day</p>
      <p>Sign Up</p>
    </div>
    <div class="flex flex-col">
      <p>Why Us</p>
      <div class="flex flex-col">
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
</template>