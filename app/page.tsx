import React from 'react';
import Hero from './_components/hero';
import { mockApi, randomDelay } from '@/mocks/handlers';
import ServiceInfoBlock, { ServiceInfoBlockItem } from './_components/service-info-block';

const posts: ServiceInfoBlockItem[] = await (await mockApi('https://mock.api.com/posts')).json();

export default async function Home() {
  await randomDelay(500, 2000);

  return (
    <main className={`maint-container`}>
      <div className="fullwidth">
        <Hero />
      </div>
     
      <div className="centered">
        <section id="service-info-block" className="px-4 py-8 mx-auto font-forest max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {posts.map((post, index) => (
              <div key={index} className="w-full">
                <ServiceInfoBlock
                  imageUrl={post.imageUrl}
                  title={post.title}
                  description={post.description}
                  btnText={post.btnText}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};