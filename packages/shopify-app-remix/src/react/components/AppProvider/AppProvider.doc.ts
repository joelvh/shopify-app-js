import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AppProvider',
  descriptionType: 'AppProviderGeneratedType',
  description: '',
  category: 'frontend',
  type: 'component',
  isVisualComponent: false,
  definitions: [
    {
      title: 'props',
      description: 'React component that sets up App Bridge and Polaris.',
      type: 'AppProviderGeneratedType',
      jsDocExamples: true,
    },
  ],
  related: [
    {
      name: 'App bridge',
      subtitle: 'Learn more about App Bridge.',
      url: '/docs/api/app-bridge-library',
      type: 'shopify',
    },
    {
      name: 'Polaris',
      subtitle: 'Learn more about Polaris.',
      url: '/docs/apps/tools/polaris',
      type: 'shopify',
    },
  ],
};

export default data;
