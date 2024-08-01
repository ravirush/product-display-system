import { addPost } from '@/lib/actions';
import styles from './addProduct.module.css';

export const metadata = {
  title: "Add Product Page",
  description: "Add Product Page Description",
};

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={addPost}>
          <h1>Add New Product</h1>
          <input type="text" placeholder="Product Name"  name="name" />
          <input type="number" placeholder="Product Price"  name="price" />
          <input type="text" placeholder="Product Page Name"  name="slug" />
          <input type="text" placeholder="Product Image URL"  name="img" />
          <textarea type="text" placeholder="Product Description"  name="desc" rows={10} />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}
  
export default AddProductPage;
