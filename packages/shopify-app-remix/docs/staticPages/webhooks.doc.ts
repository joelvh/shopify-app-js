import {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  id: 'guide-webhooks',
  title: 'Subscribing to webhooks',
  description:
    'Your app must respond to [mandatory webhook topics](/docs/apps/webhooks/configuration/mandatory-webhooks). In addition, your app can register [optional webhook topics](/docs/api/admin-rest/current/resources/webhook#event-topics).',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'config',
      title: 'Configuring webhooks',
      sectionContent:
        'To set up webhooks first we need to configure `shopifyApp` with 2 pieces:' +
        '\n1. The webhooks you want to subscribe to. In this example we subscribe to the `APP_UNINSTALLED` topic.' +
        '\n1. The code to register the `APP_UNINSTALLED` topic after a merchant installs you app. Here `shopifyApp` provides an `afterAuth` hook.' +
        "\n\n> Note: You can't register mandatory topics using this package, you must [configure those in the Partner Dashboard](/docs/apps/webhooks/configuration/mandatory-webhooks) instead.",
      codeblock: {
        title: '/app/shopify.server.ts',
        tabs: [
          {
            title: '/app/shopify.server.ts',
            code: './examples/guides/webhooks/config.example.ts',
            language: 'tsx',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'endpoints',
      title: 'Set up your endpoints',
      sectionContent:
        'Legitimate webhook requests are always `POST`s signed by Shopify, so you must authenticate them before taking any action.' +
        '\n\nFor each `callbackUrl` in your configuration, you must set up an `action` that uses the `authenticate.webhook` function to authenticate the request.' +
        '\n\nPlease keep in mind that webhook endpoints should respond as quickly as possible. If you need to run a long-running job, consider using background tasks.' +
        '\n\n> Caution: Webhook endpoints **must** respond with an `HTTP 200` code, or Shopify will retry.',
      codeblock: {
        title: '/app/routes/webhooks.tsx',
        tabs: [
          {
            title: '/app/routes/webhooks.tsx',
            code: './examples/guides/webhooks/endpoint.example.ts',
            language: 'tsx',
          },
        ],
      },
    },
    {
      type: 'Resource',
      title: 'Resources',
      anchorLink: 'resources',
      resources: [
        {
          name: 'authenticate.webhook',
          url: '/docs/api/shopify-app-remix/backend/authenticate-webhook',
        },
      ],
    },
  ],
};

export default data;
