import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app/app.module';
import { TestDatabaseService } from './database.e2e.service';

export function createE2eTestModule() {
  return Test.createTestingModule({
    imports: [AppModule],
    providers: [TestDatabaseService],
  }).compile();
}
