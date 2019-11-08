import * as mongoose from 'mongoose';

export const TenantSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    company: String,
    email: String,
    phone: String,
    building: String,
    unit: Number,
    description: String,
    created_at: {
      type: Date,
      default: Date.now 
    }
})
