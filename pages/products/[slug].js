import Head from "next/head";
import { useRouter } from "next/router";
import { getProducts, getProduct } from "../../utils/api";
import { getStrapiMedia } from "../../utils/medias";

const ProductPage = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  return (
      <div>
        <Head>
          <title>{product.title} product</title>
        </Head>
        <div>
          <img
            src={getStrapiMedia(product.image.formats.thumbnail.url)}
            alt={product.title}
          />
        </div>
        <div>
          <div>
            <h4>
              {product.title} - ${product.price}
            </h4>
            <div>{product.description}</div>
          </div>

          {product.status === "published" ? (
            <button
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-url={router.asPath}
              data-item-description={product.description}
              data-item-image={getStrapiMedia(
                product.image.formats.thumbnail.url
              )}
              data-item-name={product.title}
              v-bind="customFields"
            >
              Add to cart
            </button>
          ) : (
            <div v-else>
              <div
                role="alert"
              >
                <span>
                  Coming soon...
                </span>
                <span>
                  This article is not available yet.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
  );
};

export default ProductPage;

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug);
  return { props: { product } };
}

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((_product) => {
      return {
        params: { slug: _product.slug },
      };
    })
  };
}
