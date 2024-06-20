import { Module } from '@nestjs/common';
import { GrpcTestingService } from './grpc-testing.service';

@Module({
  providers: [GrpcTestingService],
  exports: [GrpcTestingService],
})
export class GrpcTestingModule {}
