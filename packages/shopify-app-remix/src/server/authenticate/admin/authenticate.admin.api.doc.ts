import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Admin API',
  description:
    'Contains objects used to interact with the Admin API.\n\nThis object is returned as part of different contexts, such as `admin`. See the [Related](#related) section for more information.',
  category: 'backend',
  subCategory: 'admin features',
  type: 'object',
  isVisualComponent: false,
  definitions: [
    {
      title: 'admin',
      description:
        'Provides utilities apps can use to make requests to the Admin API.',
      type: 'AdminApiContext',
      jsDocExamples: true,
    },
  ],
  related: [
    {
      name: 'Authenticated context',
      subtitle: 'Authenticate requests from Shopify Admin.',
      url: '/docs/api/shopify-app-remix/backend/authenticate-admin',
    },
    {
      name: 'Unauthenticated context',
      subtitle: 'Interact with the Admin API on non-Shopify requests.',
      url: '/docs/api/shopify-app-remix/backend/unauthenticated-admin',
    },
  ],
};

export default data;
