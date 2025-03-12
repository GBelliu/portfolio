import { NextApiRequest, NextApiResponse } from 'next';
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next/pages';

import { createClient } from '../../prismicio';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = createClient();

  setPreviewData({ req, res });

  return redirectToPreviewURL({ req, res, client });
}
