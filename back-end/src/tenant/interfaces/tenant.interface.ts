import { Document } from 'mongoose';

export interface Tenant extends Document {
    readonly first_name: string;
    readonly last_name: string;
    readonly company: string;
    readonly email: string;
    readonly phone: string;
    readonly building: string;
    readonly unit: number;
    readonly description: string;
    readonly created_at: date;
}
