import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Admin',
  description:
    'Contains functions for authenticating and interacting with the Admin API.\n\nThis function can handle requests for apps embedded in the Admin, Admin extensions, or non-embedded apps.\n\nGo to the [Related](#related) section to see all supported actions in `admin` and `billing`.',
  category: 'backend',
  subCategory: 'Authenticate',
  type: 'object',
  isVisualComponent: false,
  definitions: [
    {
      title: 'authenticate.admin',
      description:
        'Authenticates requests coming from Shopify Admin.\n\nThe shape of the returned object changes depending on the `isEmbeddedApp` config.',
      type: 'AuthenticateAdmin',
    },
    {
      title: 'AdminContext',
      description: 'Object returned by `authenticate.admin`.',
      type: 'EmbeddedAdminContext',
      jsDocExamples: true,
    },
    {
      title: 'AdminApiContext',
      description: 'Components of the `admin` response object.',
      type: 'AdminApiContext',
      jsDocExamples: true,
    },
    {
      title: 'BillingContext',
      description: 'Components of the `billing` response object.',
      type: 'BillingContext',
      jsDocExamples: true,
    },
  ],
  related: [
    {
      name: 'API context',
      subtitle: 'Interact with the Admin API.',
      url: '/docs/api/shopify-app-remix/backend/admin-features/admin-api',
    },
    {
      name: 'Billing context',
      subtitle: 'Bill merchants for your app using the Admin API.',
      url: '/docs/api/shopify-app-remix/backend/admin-features/billing',
    },
  ],
};

export default data;
