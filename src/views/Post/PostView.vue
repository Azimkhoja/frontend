<template>
    <template v-if="isLogged">
      <ul class="flex p-5 bg-indigo-50 rounded-sm w-full justify-center">
        <li>
          <router-link
            class="mx-3 block bg-primary-700 text-white py-2 px-6 rounded-xl"
            to="/post/add"
            >Add</router-link
          >
        </li>
        <li>
          <router-link
            class="mx-3 block bg-primary-700 text-white py-2 px-6 rounded-xl"
            to="/post/list"
            >List</router-link
          >
        </li>
        <li>
          <router-link
            class="mx-3 block bg-primary-700 text-white py-2 px-6 rounded-xl"
            to="/post/list"
            >Category</router-link
          >
        </li>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </template>
  </template>
  
  <script>

  export default {
    name: "Post",
  
    computed: {
      isLogged() {
        let role = localStorage.getItem("role");
        return role == 1;
      },
    },
  };
  </script>
  <style></style>
  