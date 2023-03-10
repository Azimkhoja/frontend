<template>
    <div id="app">
        <img alt="Vue logo" src="@/assets/logo.svg" class="w-10 h-10">
        <editor v-model="postVal" api-key="a75o8s9qgcl472amu7o7n16a8phncwms7cutlkdv3tueoxp5" :init="{
            height: 500,
            menubar: false,
            plugins: [
                'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
            ],
            toolbar:
                'undo redo | casechange blocks | bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlst checklist outdent indent | removeformat | a11ycheck code table help'
        }" initial-value="Welcome to TinyMCE Vue" />
    </div>
    <button class="bg-primary-600 rounded-lg text-white text-lg px-5 py-2 mt-5" @click="changeText"> Submit</button>
</template>
  
<script>
import Editor from '@tinymce/tinymce-vue'

export default {
    name: 'app',
    data() {
        return {
            postVal: ""
        }
    },
    methods: {
        changeText(e) {
            e.preventDefault();

            console.log(this.postVal);
        }
    },
    components: {
        'editor': Editor
    }
}
</script>