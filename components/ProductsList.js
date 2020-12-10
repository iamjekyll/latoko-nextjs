import Link from 'next/link'
import { getStrapiMedia } from '../utils/medias'
import styles from './ProductsList.module.css'

export default function ProductList ({ products }){
    return (
        <div className={styles.products__main}>
            {products.map((_product) => (
                <div className={styles.products__wrapper} key={_product.id} >
                    <div className={styles.products__cols}>
                        <div className={styles.products__cols0}>
                            <div className={styles.products__recommendation}>
                                <div className={styles.products__maincard}>
                                    <div className={styles.products__card}>
                                        <div className={styles.products__container}>
                                            <div className={styles.products__concss}>
                                                <Link href={`/products/${_product.slug}`}>
                                                    <a>
                                                        <div className={styles.products__images}>
                                                            <img
                                                                src={getStrapiMedia(_product.image.formats.thumbnail.url)}
                                                                alt={_product.title}
                                                            />
                                                        </div>
                                                        <div className={styles.content__wrapper}>
                                                            <Link href="#" >
                                                                <a className={styles.info__content}>
                                                                    <div className={styles.home__proname}>
                                                                        <h4>
                                                                            {_product.title}
                                                                        </h4>
                                                                        <div>
                                                                            Rp{' '}{_product.price}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        {/* <div>
                                                            {_product.description}
                                                        </div> */}
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}