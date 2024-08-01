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
    fetchUrl = `https://${process.env.VERCEL_URL}/api/productList`;
  }

  let res;
  try {
    res = await fetch(fetchUrl, {next:{revalidate:3600}});
  } catch (error) {
    console.log(error)
  }
  const data = await res.json();
  console.log("data", data);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
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