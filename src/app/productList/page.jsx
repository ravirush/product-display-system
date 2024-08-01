import ProductCard from '@/components/productCard/productCard';
import styles from './product.module.css';

export const metadata = {
  title: "Product Page",
  description: "Product Page Description",
};

// fetch data with an API
const getData = async () => {
  const apiUrl = process.env.API_URL;
  const vercelUrl = process.env.VERCEL_URL;

   let fetchUrl = process.env.NODE_ENV === 'development' ? `${apiUrl}/api/productList` : `https://${vercelUrl}/api/productList`;
   console.log('API URL: 2',  fetchUrl);
   console.log('API URL:',  process.env.NODE_ENV);

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