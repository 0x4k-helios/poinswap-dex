import { H1, P } from '~/components';

import type { FunctionComponent } from 'react';

interface PrivateSaleHeroProps {}

export const PrivateSaleHero: FunctionComponent<PrivateSaleHeroProps> = () => {
  return (
    <article className="my-40 flex flex-col gap-12 px-4 md:px-8 lg:flex-row">
      <section className="w-full max-w-[600px]">
        <h1>(VIDEO WILL BE HERE)</h1>
      </section>

      <section className="w-full max-w-[50ch] space-y-8 text-2xl">
        <H1 className="font-accent text-primary-500">Private Sale</H1>
        <P>
          Poinswap is pioneering RetailFi by building an ecosystem for retailers
          with user friendly and curated DEX. Poinswap is bootstraping and
          expected to launch IDO on Q3 2022.{' '}
        </P>
        <P>
          Poinswap is a tech enabler for retailers to join the blockchain
          revolution by tokenizing the point rewards and develop retail subnets
          in Avalanche network
        </P>
      </section>
    </article>
  );
};
