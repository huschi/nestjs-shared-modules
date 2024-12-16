# NestJS Example Project: Importing an External Module

This project demonstrates how to import and use an external NestJS module that has been packaged and published as an npm package.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- [Nest CLI](https://docs.nestjs.com/cli/overview) (optional, for scaffolding NestJS applications)

## Building the External Module
Navigate to the shared folder:
bash
Copy code
```bash
cd shared
npm run build
```

## Installing the External Module

Assume the external module is called `@nestjsplus/shared` and is available locally. Install it using npm:

```bash
cd app1
npm install ../shared
```

## Preparing .env

```bash
cp .env_example .env
```

## Running the Application

Start the NestJS application with the following command:

```bash
cd app1
npm run start:dev
```

The app should be running on `http://localhost:3040`.

## Testing the API Endpoint

If you have an endpoint running at `http://localhost:3040/api/common/getHello`, you can test it using `curl` or a tool like Postman.

### Using `curl`

```bash
curl http://localhost:3040/api/common/getHello
```

### Expected Response

```json
{
  "message": "app1_env1"
}
```

### Conditional Exports for Shared Modules
If multiple modules are located in the shared folder, it might be better to support deep imports with conditional exports like:

```typescript
import { CommonService } from '@nestjsplus/shared/common';
import { Module1Service } from '@nestjsplus/shared/module1';
import { Module2Component } from '@nestjsplus/shared/module2';
```

When using "module": "Node16" and "moduleResolution": "Node16" in your TypeScript tsconfig.json, deep imports through the "exports" field become straightforward and consistent. However, be aware that this configuration might introduce compatibility issues with older npm packages or tools that do not fully support the Node16 module resolution system.

## License
This project is licensed under the MIT License.
