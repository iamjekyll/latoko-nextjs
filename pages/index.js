import Head from 'next/head'

import ProductsList from '../components/ProductsList'

// API
import { getProducts } from '../utils/api'

export default function Home({ products }) {
  return (
    <div className="container">
      <Head>
        <title>Latoko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <>
          <ProductsList products={products} />
        </>
    </div>
  )
}

export async function getStaticProps(){
  const products = await getProducts();
  return { props: { products } };
}