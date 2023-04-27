import Head from 'next/head';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>SIBISA - Jual Beli Sampah Anorganik Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="bg-white text-black py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Jual Beli Sampah Anorganik Online dengan SIBISA (Si Bijak Sampah)
            </h1>
            <p className="text-lg"></p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-medium mb-8">Produk Terbaru</h2>
            {/* list produk terbaru */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
