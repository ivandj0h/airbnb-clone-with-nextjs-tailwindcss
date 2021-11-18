import Header from '@/ui/header';
import Banner from '@/ui/banner';
import ExploreNearByData from 'ui/explore-near-by-data';

export default function HomePage(listings) {
  return (
    <>
      <Header />
      <Banner />

      <main>
        <section>
          <div>
            <h1>Explore nearby</h1>
          </div>
          <ExploreNearByData />
        </section>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
