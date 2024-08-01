import ProductCard from '@/components/productCard/productCard';
import styles from './product.module.css';

export const metadata = {
  title: "Product Page",
  description: "Product Page Description",
};

// fetch data with an API
const getData = async () => {
  const apiUrl = process.env.VERCEL_URL;

  const res = await fetch(`https://${apiUrl}/api/productList`, {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const ProductListPage = async () => {

  // fetch data with an API
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) =>(
        <div className={styles.post} key={post.id}>
          <ProductCard post={post}/>
        </div>
      ))}
    </div>
  );
}
  
export default ProductListPage;