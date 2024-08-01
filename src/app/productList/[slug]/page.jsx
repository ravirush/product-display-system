import { getPost } from '@/lib/data';
import styles from './singleProduct.module.css';
import Image from 'next/image';
import { deletePost } from "@/lib/actions";
import { connectToDb } from '@/lib/utils';
import { Post } from '@/lib/models';

// fetch data with an API
const getData = async (slug) => {
  connectToDb();

  const post = await Post.findOne({slug});
  return post;
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
          <input type="hidden" name="id" value={post._id.toString()} />
          <button className={styles.postButton}>Delete</button>
        </form>
      </div>
    </div>
  );
}
  
export default SingleProductPage;