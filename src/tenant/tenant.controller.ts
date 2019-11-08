import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDTO } from './dto/create-tenant.dto';

@Controller('tenant')
export class TenantController {
    constructor(private tenantService: TenantService) { }

    // add a tenant
    @Post('/create')
    async addTenant(@Res() res, @Body() createTenantDTO: CreateTenantDTO) {
        const tenant = await this.tenantService.addTenant(createTenantDTO);
        return res.status(HttpStatus.OK).json({
            message: "Tenant has been created successfully",
            tenant
        })
    }

    // Retrieve tenants list
    @Get('tenants')
    async getAllTenant(@Res() res) {
        const tenants = await this.tenantService.getAllTenant();
        return res.status(HttpStatus.OK).json(tenants);
    }

    // Fetch a particular tenant using ID
    @Get('tenant/:tenantID')
    async getTenant(@Res() res, @Param('tenantID') tenantID) {
        const tenant = await this.tenantService.getTenant(tenantID);
        if (!tenant) throw new NotFoundException('Tenant does not exist!');
        return res.status(HttpStatus.OK).json(tenant);
    }

    // Update a tenant's details
    @Put('/update')
    async updateTenant(@Res() res, @Query('tenantID') tenantID, @Body() createTenantDTO: CreateTenantDTO) {
        const tenant = await this.tenantService.updateTenant(tenantID, createTenantDTO);
        if (!tenant) throw new NotFoundException('Tenant does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Tenant has been successfully updated',
            tenant
        });
    }

    // Delete a tenant
    @Delete('/delete')
    async deleteTenant(@Res() res, @Query('tenantID') tenantID) {
        const tenant = await this.tenantService.deleteTenant(tenantID);
        if (!tenant) throw new NotFoundException('Tenant does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Tenant has been deleted',
            tenant
        })
    }
}
