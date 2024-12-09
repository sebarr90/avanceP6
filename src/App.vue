<template>
  <nav class="navbar bg-dark border-bottom border-body text-white" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link class="nav-link" aria-current="page"  to="/"><i class="fa-solid fa-headset"></i> Game Opinion</router-link>
        </div>
    </nav>
  <router-view/>
</template>

<style>
.fa-headset{
  color: white;
}

</style>
