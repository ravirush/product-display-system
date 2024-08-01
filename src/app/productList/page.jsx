import ProductCard from '@/components/productCard/productCard';
import styles from './product.module.css';

export const metadata = {
  title: "Product Page",
  description: "Product Page Description",
};

// fetch data with an API
const getData = async () => {
  const vercelUrl = process.env.VERCEL_URL;

  let fetchUrl;

  if (process.env.NODE_ENV === 'development') {
    // In development, use the local API endpoint
    fetchUrl = `http://localhost:3000/api/productList`;
  } else {
    // In production, use the dynamic Vercel URL or other production URL
    fetchUrl = `${process.env.VERCEL_URL}/api/productList`;
  }

  const res = await fetch(fetchUrl, {next:{revalidate:3600}});

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