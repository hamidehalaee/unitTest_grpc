import { Test, TestingModule } from '@nestjs/testing';
import { GrpcTestingService } from './grpc-testing.service';

describe('GrpcTestingService', () => {
  let service: GrpcTestingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrpcTestingService],
    }).compile();

    service = module.get<GrpcTestingService>(GrpcTestingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
