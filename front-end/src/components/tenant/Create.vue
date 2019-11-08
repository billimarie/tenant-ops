<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2> Create Tenant </h2>
      <form id="create-post-form" @submit.prevent="createTenant">
        <div class="form-group col-md-12">
          <label for="title"> First Name </label>
          <input type="text" id="first_name" v-model="first_name" name="title" class="form-control" placeholder="Enter First Name">
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Last Name </label>
          <input type="text" id="last_name" v-model="last_name" name="title" class="form-control" placeholder="Enter Last Name">
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Company </label>
          <input type="text" id="company" v-model="company" name="title" class="form-control" placeholder="Enter Company Name">
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Email </label>
          <input type="text" id="email" v-model="email" name="title" class="form-control" placeholder="Enter Email">
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Phone </label>
          <input type="text" id="phone_number" v-model="phone" name="title" class="form-control" placeholder="Enter Phone number">
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Building </label>
          <input type="text" id="building" v-model="building" name="title" class="form-control" placeholder="Enter Building">
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Unit </label>
          <input type="number" id="unit" v-model="unit" name="title" class="form-control" placeholder="Enter Unit Number">
        </div>
        <div class="form-group col-md-12">
          <label for="description"> Description </label>
          <input type="text" id="description" v-model="description" name="description" class="form-control" placeholder="Enter Description">
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit"> Create Tenant </button>
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
