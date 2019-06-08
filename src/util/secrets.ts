import logger from './logger';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { ENVIRONMENT } from '../const';

if (fs.existsSync('.env')) {
    logger.debug('Using .env file to supply config environment variables');
    dotenv.config({ path: '.env' });
} else {
    logger.debug('Using .env.example file to supply config environment variables');
    dotenv.config({ path: '.env.example' });  // you can delete this after you create your own .env file!
}
const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'

// export const SESSION_SECRET: string = process.env.SESSION_SECRET as string;
export const MYSQL_HOST: string = process.env.MYSQL_HOST;
export const MYSQL_USER: string = process.env.MYSQL_USER;
export const MYSQL_PWD: string = process.env.MYSQL_PWD;
export const MYSQL_PORT: number = 3306;
export const MYSQL_DB: string = process.env.MYSQL_DB;

// if (!SESSION_SECRET) {
//     logger.error('No client secret. Set SESSION_SECRET environment variable.');
//     process.exit(1);
// }

if (!MYSQL_HOST) {
    logger.error('Can not connect to mysql');
    process.exit(1);
}
