import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as configMemory from './db.memory.datasource.json';
import * as configMongo from './db.mongo.datasource.json';

export class DbDataSource extends juggler.DataSource {
  static dataSourceName = 'db';
  dbProfile: String;

  constructor(
    @inject('datasources.config.db', { optional: true })
    dsMemConfig: object = configMemory,
    dsMongoConfig: object = configMongo,
  ) {
    if (process.env.DB_PROFILE === 'mongo') {
      console.info('***Use db: mongo');
      super(dsMongoConfig);
    } else {
      super(dsMemConfig);
    }
  }
}
