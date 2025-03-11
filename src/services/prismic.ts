import * as prismic from '@prismicio/client';
import { IncomingMessage } from 'http';
import sm from '../../slicemachine.config.json';

export const { repositoryName } = sm;

export function getPrismicClient(req?: IncomingMessage) {
  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetchOptions: req ? { headers: { cookie: req.headers.cookie } } : undefined
  });

  return client;
}
