export const getFilesInPath = (env: string) => [
  process.cwd(),
  'apps',
  'backend',
  'restaurants-service',
  'env',
  `.${env}.env`,
];
