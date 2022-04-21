import { json, useLoaderData } from 'remix';

import { Image, RemixLink } from '~/components';
import { QUERY_ALL_ARTICLES } from '~/graphql';
import { graphcmsClient } from '~/lib';

import type { LoaderFunction, MetaFunction } from 'remix';
import type { SEOHandle } from '~/components';

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/blog`, priority: 0.9 }];
  },
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: 'Poinswap - Blog articles',
    description: 'Resources and readings from Poinswap community.',
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pageQuery = Number(url.searchParams.get('page'));
  const itemsPerPage = 10;
  const first = itemsPerPage;
  const skip = pageQuery > 1 ? itemsPerPage * pageQuery - itemsPerPage : 0;

  const response = await graphcmsClient
    .query(QUERY_ALL_ARTICLES, { first, skip })
    .toPromise();

  const { articles } = response.data;

  return json({
    articles,
  });
};

type LoaderData = {
  articles: any[];
};

export default function BlogRoute() {
  const { articles } = useLoaderData<LoaderData>();

  return (
    <div>
      <h1 className="mb-14 text-4xl font-extrabold text-primary-500">
        Blog Articles
      </h1>
      <div className="flex flex-col space-y-12">
        {articles.map((article) => {
          return (
            <RemixLink key={article.id} to={article.slug}>
              <div className="flex flex-col space-y-4">
                <Image src={article.coverImage.url} alt={article.title} />
                <h2 className="text-3xl font-bold">{article.title}</h2>
                <p className="text-md">{article.summary}</p>
              </div>
            </RemixLink>
          );
        })}
      </div>
    </div>
  );
}
