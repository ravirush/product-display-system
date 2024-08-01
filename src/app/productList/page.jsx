import ProductCard from '@/components/productCard/productCard';
import styles from './product.module.css';
import { Post } from "@/lib/models";
import { connectToDb } from '@/lib/utils';
export const metadata = {
  title: "Product Page",
  description: "Product Page Description",
};

// fetch data with an API
const getData = async () => {
  connectToDb();

  const posts = await Post.find();
  return posts;
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