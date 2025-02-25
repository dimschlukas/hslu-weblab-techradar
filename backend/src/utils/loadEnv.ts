import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

export function loadEnvironmentVariables(): void {
  function findEnvFile(startDir: string = process.cwd()): string | null {
    let currentDir = startDir;
    while (currentDir !== path.parse(currentDir).root) {
      const envPath = path.join(currentDir, '.env');
      if (fs.existsSync(envPath)) {
        return envPath;
      }
      currentDir = path.dirname(currentDir); // Move to the parent directory
    }
    return null; // No .env file found
  }

  const envFilePath = findEnvFile();
  if (envFilePath) {
    dotenvExpand.expand(dotenv.config({ path: envFilePath }));
    console.log(`Loaded environment variables from: ${envFilePath}`);
  } else {
    console.warn('No .env file found');
  }
}
