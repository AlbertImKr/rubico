import { Injectable } from '@nestjs/common';
import { DataSource, QueryRunner } from 'typeorm';
import { PortfolioFileRegisterData } from '../dto/portfolio-file.data.dto';
import { PortfolioFile } from '../domain/portfolio_file.domain';
import { ObjectId } from 'mongodb';
import { Transactional } from '../../shared/decorators/transactional.decorator';
import { PortfolioFileTransformer } from '../transformers/resume.domain.transformer';
import { PortfolioFileEntity } from '../entities/portfolio_file.entity';

@Injectable()
export class PortfolioFileWriteService {
  readonly bucketName: string;

  constructor(private readonly dataSource: DataSource) {}

  @Transactional()
  async register(
    data: PortfolioFileRegisterData,
    queryRunner?: QueryRunner,
  ): Promise<ObjectId> {
    const portfolio: PortfolioFile = {
      ...data,
      id: new ObjectId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return await this.save(portfolio, queryRunner);
  }

  @Transactional()
  public async save(portfolio: PortfolioFile, queryRunner?: QueryRunner) {
    const portfolioEntity: PortfolioFileEntity = await queryRunner.manager.save(
      PortfolioFileEntity,
      PortfolioFileTransformer.toEntity(portfolio),
    );
    const savedPortfolio: PortfolioFile =
      PortfolioFileTransformer.fromEntity(portfolioEntity);
    return savedPortfolio.id;
  }
}
