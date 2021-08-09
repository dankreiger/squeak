import { pipe } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { getFilesInPath } from '../getFilesInPath';

export const getProcessEnvVars = pipe(
  getFilesInPath,
  (args: string[]) => path.join(...args),
  fs.readFileSync,
  dotenv.parse
);
