import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Tenant } from './interfaces/tenant.interface';
import { CreateTenantDTO } from './dto/create-tenant.dto';

@Injectable()
export class TenantService {
    constructor(@InjectModel('Tenant') private readonly tenantModel: Model<Tenant>) { }
    // fetch all tenants
    async getAllTenant(): Promise<Tenant[]> {
        const tenants = await this.tenantModel.find().exec();
        return tenants;
    }
    // Get a single tenant
    async getTenant(tenantID): Promise<Tenant> {
        const tenant = await this.tenantModel.findById(tenantID).exec();
        return tenant;
    }
    // post a single tenant
    async addTenant(createTenantDTO: CreateTenantDTO): Promise<Tenant> {
        const newTenant = await this.tenantModel(createTenantDTO);
        return newTenant.save();
    }
    // Edit tenant details
    async updateTenant(tenantID, createTenantDTO: CreateTenantDTO): Promise<Tenant> {
        const updatedTenant = await this.tenantModel
            .findByIdAndUpdate(tenantID, createTenantDTO, { new: true });
        return updatedTenant;
    }
    // Delete a tenant
    async deleteTenant(tenantID): Promise<any> {
        const deletedTenant = await this.tenantModel.findByIdAndRemove(tenantID);
        return deletedTenant;
    }
}
