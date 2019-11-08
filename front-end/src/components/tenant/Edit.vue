<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()"> View All Tenants </button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2> Edit Tenant </h2>
      <form id="create-post-form" @submit.prevent="editTenant">
        <div class="form-group col-md-12">
          <label for="title"> First Name </label>
          <input type="text" id="first_name" v-model="tenant.first_name" name="title" class="form-control" placeholder="Enter First Name">
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Last Name </label>
          <input type="text" id="last_name" v-model="tenant.last_name" name="title" class="form-control" placeholder="Enter Last Name">
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Company </label>
          <input type="text" id="company" v-model="tenant.company" name="title" class="form-control" placeholder="Enter Company Name">
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Email </label>
          <input type="text" id="email" v-model="tenant.email" name="title" class="form-control" placeholder="Enter email">
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Phone </label>
          <input type="text" id="phone_number" v-model="tenant.phone" name="title" class="form-control" placeholder="Enter Phone number">
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Building </label>
          <input type="text" id="building" v-model="tenant.building" name="title" class="form-control" placeholder="Enter Building">
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Unit </label>
          <input type="text" id="unit" v-model="tenant.unit" name="title" class="form-control" placeholder="Enter Unit Number">
        </div>
        <div class="form-group col-md-12">
          <label for="description"> Description </label>
          <input type="text" id="description" v-model="tenant.description" name="description" class="form-control" placeholder="Enter Description">
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit"> Edit Tenant </button>
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
        id: 0,
        tenant: {}
      };
    },
    created() {
      this.id = this.$route.params.id;
      this.getTenant();
    },
    methods: {
      editTenant() {
        let tenantData = {
          first_name: this.tenant.first_name,
          last_name: this.tenant.last_name,
          company: this.tenant.company,
          email: this.tenant.email,
          phone: this.tenant.phone,
          building: this.tenant.building,
          unit: this.tenant.unit,
          description: this.tenant.description
        };
        axios
          .put(
            `${server.baseURL}/tenant/update?tenantID=${this.id}`,
            tenantData
          )
          .then(data => {
            router.push({ name: "home" });
          });
      },
      getTenant() {
        axios
          .get(`${server.baseURL}/tenant/tenant/${this.id}`)
          .then(data => (this.tenant = data.data));
      },
      navigate() {
        router.go(-1);
      }
    }
  };
</script>
