<template>
  <div class="w-full bg-gray-100">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
      <h2> Create Tenant </h2>
      <form id="create-post-form" @submit.prevent="createTenant">
        <div class="mb-4">
          <label for="title" class="block text-gray-700 text-sm font-bold mb-2 text-left">First Name </label>
          <input type="text" id="first_name" v-model="first_name" name="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter First Name">
        </div>
        <div class="mb-4">
          <label for="title" class="block text-gray-700 text-sm font-bold mb-2 text-left">Last Name </label>
          <input type="text" id="last_name" v-model="last_name" name="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Last Name">
        </div>
        <div class="mb-4">
          <label for="title" class="block text-gray-700 text-sm font-bold mb-2 text-left">Company </label>
          <input type="text" id="company" v-model="company" name="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Company Name">
        </div>
        <div class="mb-4">
          <label for="title" class="block text-gray-700 text-sm font-bold mb-2 text-left">Email </label>
          <input type="text" id="email" v-model="email" name="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Email">
        </div>
        <div class="mb-4">
          <label for="title" class="block text-gray-700 text-sm font-bold mb-2 text-left">Phone </label>
          <input type="text" id="phone_number" v-model="phone" name="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Phone number">
        </div>
        <div class="mb-4">
          <label for="title" class="block text-gray-700 text-sm font-bold mb-2 text-left">Building </label>
          <input type="text" id="building" v-model="building" name="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Building">
        </div>
        <div class="mb-4">
          <label for="title" class="block text-gray-700 text-sm font-bold mb-2 text-left">Unit </label>
          <input type="number" id="unit" v-model="unit" name="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Unit Number">
        </div>
        <div class="mb-4">
          <label for="description" class="block text-gray-700 text-sm font-bold mb-2 text-left">Description </label>
          <input type="text" id="description" v-model="description" name="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Description">
        </div>
        <div class="flex items-center justify-between">
          <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Create Tenant </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { server } from "../../helper";
  import axios from "axios";
  import router from "../../router";
  export default {
    data() {
      return {
        first_name: "",
        last_name: "",
        company: "",
        email: "",
        phone: "",
        building: "",
        unit: "",
        description: ""
      };
    },
    methods: {
      createTenant() {
        let tenantData = {
          first_name: this.first_name,
          last_name: this.last_name,
          company: this.company,
          email: this.email,
          phone: this.phone,
          building: this.building,
          unit: this.unit,
          description: this.description
        };
        this.__submitToServer(tenantData);
      },
      __submitToServer(data) {
        axios.post(`${server.baseURL}/tenant/create`, data).then(data => {
          router.push({ name: "home" });
        });
      }
    }
  };
</script>
