<template>
    <nav class="nav">
        <div class="nav__item container">
            <router-link class="logo" to="/"><img class="logo" src="@/assets/images/logo.png" alt="logo"></router-link>
            <ul class="nav__item_list">
                <li v-for="link in links" :key="link.name"><router-link class="nav__item_list_link"
                        :to="link.url">{{ link.name }}</router-link></li>
            </ul>
           
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const links = ref([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
])

</script>
