<template >
     <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new post</h2>
      <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
                  <input v-model="category" type="text" name="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="category name" required="">
              </div>
              <!-- <div class="w-full">
                  <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input v-model="username" type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="username" required="">
              </div>
              <div class="w-full">
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input v-model="password" type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="******" required="">
              </div>
              <div>
                  <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                  <select  id="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option >1</option>
                      <option >2</option>
                     
                  </select>
              </div>
              <div>
                  <label for="role_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                  <input disabled type="text" name="role_id" id="role_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="+998" >
              </div> 
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biography</label>
                  <textarea disabled id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type biography"></textarea>
              </div> -->
          </div>
          <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                @click="AddCategory"
          >
              Add category
          </button>
      </form>
  </div>
</section>        
</template>
<script>
import { toast } from 'vue3-toastify';


export default {
    name: "AddCategory",
    data(){
        return {
            category:""
        }
    },
    methods: {
        AddCategory(e){
            e.preventDefault();

            if(this.category){
                this.$store.dispatch('ADD_CATEGORY', {name: this.category}).then((res) => {
                    console.log(res);
                    if(res.data.status == 201){
                        toast.success('Category added successfully')
                        this.$router.push('/category/list')
                    }else{
                        // toast.warning(this.$store.state.CreateCategory.message);
                        toast.error(res.data.message)
                    }
                }).catch((error) => {
                    console.log(error);
                })
            }else{
                toast.warning('Enter a category name')
            }
        }
    },
    mounted() {
        
    },  
    computed:{

    }  ,

}
</script>
<style lang="css">
    
</style>