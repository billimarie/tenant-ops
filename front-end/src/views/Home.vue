<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>Tenant Ops</h1>
      <p>A Tenant Management System. Built by BLR.</p>
      <div v-if="tenants.length === 0">
        <h2> No tenant found at the moment </h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Company</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Building</th>
            <th scope="col">Unit #</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tenant in tenants" :key="tenant._id">
            <td>{{ tenant.first_name }}</td>
            <td>{{ tenant.last_name }}</td>
            <td>{{ tenant.company }}</td>
            <td>{{ tenant.email }}</td>
            <td>{{ tenant.phone }}</td>
            <td>{{ tenant.building }}</td>
            <td>{{ tenant.unit }}</td>
            <td>{{ tenant.description }}</td>
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px;">
                  <router-link :to="{name: 'Edit', params: {id: tenant._id}}" class="btn btn-sm btn-outline-secondary">Edit Tenant </router-link>
                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteTenant(tenant._id)">Delete Tenant</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
