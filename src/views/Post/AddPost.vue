<template>
    <div id="app">
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" @click="showCategory"
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 my-5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="button">
            Dropdown button
            <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton" >
                <li v-for="item in category">
                    <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ item.name }}</a>
                </li>
            </ul>
        </div>

        <img alt="Vue logo" src="@/assets/logo.svg" class="w-10 h-10" />
        <editor v-model="postVal" api-key="a75o8s9qgcl472amu7o7n16a8phncwms7cutlkdv3tueoxp5" :init="{
            height: 500,
            menubar: false,
            plugins: [
                'a11ychecker',
                'advlist',
                'advcode',
                'advtable',
                'autolink',
                'checklist',
                'export',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'powerpaste',
                'fullscreen',
                'formatpainter',
                'insertdatetime',
                'media',
                'table',
                'help',
                'wordcount',
            ],
            toolbar:
                'undo redo | casechange blocks | bold italic backcolor | \
                                              alignleft aligncenter alignright alignjustify | \
                                              bullist numlst checklist outdent indent | removeformat | a11ycheck code table help',
        }" initial-value="Welcome to TinyMCE Vue" />
    </div>
    <button class="bg-primary-600 rounded-lg text-white text-lg px-5 py-2 mt-5" @click="changeText">
        Submit
    </button>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
    name: "app",
    data() {
        return {
            postVal: "",
            category: "",
        };
    },
    methods: {
        changeText(e) {
            e.preventDefault();
        },
        showCategory() {
            this.$store.dispatch("GET_CATEGORY").then((res) => {
                if (res.data.status == 200) {
                    this.category = res.data.category
                }
            }).catch((rej) => {
                toast.error('Category not found')
            });
        },
    },
    components: {
        editor: Editor,
    },
};
</script>
