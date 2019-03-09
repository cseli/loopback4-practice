import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as configMemory from './db.memory.datasource.json';
import * as configMongo from './db.mongo.datasource.json';

export class DbDataSource extends juggler.DataSource {
  static dataSourceName = 'db';

  constructor(
    @inject('datasources.config.db', { optional: true })
    dsConfig: object = configMongo,
  ) {
    super(dsConfig);
  }
}
