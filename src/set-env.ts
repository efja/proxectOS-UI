// https://ichi.pro/es/como-proteger-variables-de-entorno-angular-para-su-uso-en-acciones-de-github-63498768340368

/* tslint:disable */
// @ts-nocheck
const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;

function writeFileUsingFS(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(`wrote variables to ${targetPath}`);
    }
  });
}


// Providing path to the `environments` directory
const envDirectory = './src/environments';

// creates the `environments` directory if it does not exist
if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

//creates the `environment.prod.ts` and `environment.ts` file if it does not exist
writeFileUsingFS('./src/environments/environment.prod.ts', '');
writeFileUsingFS('./src/environments/environment.ts', '');

//actual content to be compiled dynamically and pasted into respective environment files
const environmentFileContent = (isProduction) => {
  return `
// Este ficheiro autoxerase a partir do ficheiro de variables .env
export const environment = {
  production      : ${isProduction},

  APP_NAME        : '${process.env.APP_NAME}',
  APP_VERSION     : '${getAPIVersion()}',
  APP_DESCRIPTION : '${process.env.APP_DESCRIPTION}',
  API_HOST        : '${process.env.API_HOST}',
  API_PORT        : '${process.env.API_PORT}',
  API_ROUTE       : '${process.env.API_ROUTE}',
  API_URI         : '${getAPICompleteURI()}',
};
`;
};

writeFileUsingFS('./src/environments/environment.prod.ts', environmentFileContent(true)); // appending data into the target file
writeFileUsingFS('./src/environments/environment.ts', environmentFileContent(false)); // appending data into the target file

/**
 * Toma o número de versión a partir da versión definida no ficheiro json
 */
function getAPIVersion(): string {
  return `${process.env.APP_PREFIX}${process.env.npm_package_version}`;
}

function getAPICompleteURI(): string {
  return `${process.env.API_HOST}:${process.env.API_PORT}(${process.env.API_ROUTE})`;
}

/* tslint:enable */
