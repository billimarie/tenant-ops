import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantModule } from './tenant/tenant.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tenant-app', { useNewUrlParser: true }),
    TenantModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
