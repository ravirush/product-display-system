import Link from 'next/link';
import styles from './productCard.module.css';
import Image from 'next/image';

const ProductCard = ({post}) => {
    
    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" fill className={styles.img}/>
                </div>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.name}>{post.name}</h1>
                <h3 className={styles.price}>${post.price}</h3>
                <p className={styles.desc}>{truncateText(post.desc, 100)}</p>
                <Link className={styles.link} href={`/productList/${post.slug}`}>READ MORE</Link>
            </div>
        </div>
    );
}

export default ProductCard;