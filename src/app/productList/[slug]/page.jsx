import { getPost } from '@/lib/data';
import styles from './singleProduct.module.css';
import Image from 'next/image';
import { deletePost } from "@/lib/actions";

// fetch data with an API
const getData = async (slug) => {
  const vercelUrl = process.env.VERCEL_URL;

  let fetchUrl;

  if (process.env.NODE_ENV === 'development') {
    // In development, use the local API endpoint
    fetchUrl = `http://localhost:3000/api/productList/${slug}`;
  } else {
    // In production, use the dynamic Vercel URL or other production URL
    fetchUrl = `https://${process.env.VERCEL_URL}/api/productList/${slug}`;
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

export const generateMetadata = async ({params}) => {
  const {slug} = params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'This post does not exist.'
    };
  }
  
  return {
    title: post.name,
    description: post.desc,
  };
}

const SingleProductPage = async ({ params }) => {
  const {slug} = params;

  console.log('API URL:',  process.env.NODE_ENV);
  // fetch data with an API
  const post = await getData(slug);

  if (!post) {
    return (
      <div className={styles.error}>
        <h1>Page Not Found</h1>
        <p>The product was successfully deleted.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt="" fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.name}>{post.name}</h1>
        <h3 className={styles.price}>${post.price}</h3>
        <p className={styles.desc}>{post.desc}</p>

        <form action={deletePost}>
          <input type="hidden" name="id" value={post._id} />
          <button className={styles.postButton}>Delete</button>
        </form>
      </div>
    </div>
  );
}
  
export default SingleProductPage;