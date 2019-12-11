/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  usersUrl: '/users',
  loginUrl: '/tokens',
  requestPassUrl: '/password/reset-request',
  resetPassUrl: '/password/reset',
  changePassUrl: '/password',
  thingsUrl: '/things',
  channelsUrl: '/channels',
  configUrl: '/config',
  bootstrapUrl: '/bootstrap',

  usersVersionUrl: '/users/version',
  thingsVersionUrl: '/things/version',
  normalizerVersionUrl: '/normalizer/version',
  httpVersionUrl: '/http/version',
  websocketVersionUrl: '/ws/version',
  writerVersionUrl: '/writer/version',
  writerChannelsUrl: '/writer/channels',
  readerVersionUrl: '/reader/version',
  readerChannelsUrl: '/reader/channels',

  grafanaHome: 'http://54.171.128.181:3001/?orgId=1&kiosk',
  jaegerHome: 'http://54.171.128.181:16686/search',
  loraServer: 'http://lora.mainflux.io/#/',
  nodeRedHome: 'http://54.171.128.181:1880',
};
