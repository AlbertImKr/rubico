import { DataSource } from 'typeorm';

export class MyDataBaseService {
  private static dataSource: DataSource;

  public static setDataSource(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public static getDataSource(): DataSource {
    if (!MyDataBaseService.dataSource) {
      throw new Error('DataSource is not set');
    }
    return this.dataSource;
  }
}
