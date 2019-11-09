<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>Tenant Ops</h1>
      <p>A Tenant Management System. Built by BLR.</p>
      <div v-if="tenants.length === 0">
        <h2> No tenant found at the moment </h2>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <div class="container">
        <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead class="text-white">
            <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th scope="col" class="p-3 text-left">First Name</th>
              <th scope="col" class="p-3 text-left">Last Name</th>
              <th scope="col" class="p-3 text-left">Company</th>
              <th scope="col" class="p-3 text-left">Email</th>
              <th scope="col" class="p-3 text-left">Phone</th>
              <th scope="col" class="p-3 text-left">Building</th>
              <th scope="col" class="p-3 text-left">Unit #</th>
              <th scope="col" class="p-3 text-left">Description</th>
              <th scope="col" class="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody class="flex-1 sm:flex-none">
            <tr v-for="tenant in tenants" :key="tenant._id" class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td class="border-grey-light border hover:bg-gray-100 p-3">{{ tenant.first_name }}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{ tenant.last_name }}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{ tenant.company }}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{ tenant.email }}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{ tenant.phone }}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{ tenant.building }}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{ tenant.unit }}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{ tenant.description }}</td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <router-link :to="{name: 'Edit', params: {id: tenant._id}}" class="btn btn-sm btn-outline-secondary">Edit Tenant</router-link> |
                    <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteTenant(tenant._id)">Delete Tenant</button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
  import { server } from "../helper";
  import axios from "axios";
  export default {
    data() {
      return {
        tenants: []
      };
    },
    created() {
      this.fetchTenants();
    },
    methods: {
      fetchTenants() {
        axios
          .get(`${server.baseURL}/tenant/tenants`)
          .then(data => (this.tenants = data.data));
      },
      deleteTenant(id) {
        axios
          .delete(`${server.baseURL}/tenant/delete?tenantID=${id}`)
          .then(data => {
            console.log(data);
            window.location.reload();
          });
      }
    }
  };
</script>
