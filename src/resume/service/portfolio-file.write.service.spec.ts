import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioFileWriteService } from './portfolio-file.write.service';
import {
  MockDataSourceProvider,
  mockEntityManager,
} from '../../shared/test-utils/test.utils';
import { PortfolioFileRegisterData } from '../dto/portfolio-file.data.dto';
import { ProfileImageName } from '../../shared/models/profile-image-name.model';
import { Link } from '../../shared/models/link.model';
import { ObjectId } from 'mongodb';
import { PortfolioFileEntity } from '../entities/portfolio_file.entity';

describe('PortfolioFileWriteService', () => {
  let service: PortfolioFileWriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortfolioFileWriteService, MockDataSourceProvider],
    }).compile();

    service = module.get<PortfolioFileWriteService>(PortfolioFileWriteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('포트폴리오 파일을 저장한다.', async () => {
    // given
    const portfolioFileRegisterData: PortfolioFileRegisterData = {
      name: new ProfileImageName('test'),
      mimeType: 'application/pdf',
      link: new Link('https://test.com'),
      userId: new ObjectId(),
    };
    const portfolioFile: PortfolioFileEntity = {
      ...portfolioFileRegisterData,
      id: new ObjectId().toHexString(),
      resume: null,
      link: portfolioFileRegisterData.link.value,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };
    jest.spyOn(mockEntityManager, 'save').mockResolvedValueOnce(portfolioFile);

    // when
    const response: ObjectId = await service.register(
      portfolioFileRegisterData,
    );

    // then
    expect(mockEntityManager.save).toHaveBeenCalledTimes(1);
    expect(response.toHexString()).toEqual(portfolioFile.id);
  });
});
