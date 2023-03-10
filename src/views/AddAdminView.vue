<template >
       <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
      <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                  <input v-model="fullname" type="text" name="fullname" id="fullname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="fullname" required="">
              </div>
              <div class="w-full">
                  <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input v-model="username" type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="username" required="">
              </div>
              <div class="w-full">
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input v-model="password" type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="******" required="">
              </div>
              <div>
                  <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                  <select  v-model="role_id" id="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option >1</option>
                      <option >2</option>
                     
                  </select>
              </div>
              <div>
                  <label for="phonenumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                  <input disabled type="text" name="phonenumber" id="phonenumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="+998" >
              </div> 
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biography</label>
                  <textarea disabled id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type biography"></textarea>
              </div>
          </div>
          <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                @click="addAdmin"
          >
              Add admin
          </button>
      </form>
  </div>
</section>
</template>
<script>
import { toast } from 'vue3-toastify';

export default {
    name: "AddAdmin",
    data() {
            return {
                fullname: "",
                username: "",
                password: "",
                role_id: 0,

            }
    },
    methods: {
       addAdmin(e){
            e.preventDefault();
            
            const newAdmin = {
                fullname : this.fullname,
                username: this.username,
                password: this.password,
                role_id: this.role_id
            }   
            if(newAdmin.fullname.length == 0 || newAdmin.username.length == 0 || newAdmin.password.length == 0){
                toast.warning("Please enter the required  data!")
            }else {
            }
            this.$store.dispatch('ADD_ADMIN', newAdmin)
            .then((res) => {
                        if(res.data.status != 201) {
                            toast.error(res.data.message)
                        }else{
                            toast.success(res.data.message)
                            this.$router.push({path: '/admin/list'})
                        }
                }).catch((rej) => {
                    console.log(rej);
                })
        }
    }
}
</script>
<style lang="css">
    
</style>