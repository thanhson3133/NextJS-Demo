import React from "react";
import styles from "../../styles/coder.module.css";
export const getStaticPaths = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users"); //gửi request
  const data = await res.json();

  const paths = data.map((item) => {
    // mảng paths duyệt data
    return {
      params: { id: item.id.toString() }, // trả về thuộc tính params chứa thuộc tính id, chuyển đổi id từ dạng số sang String
    };
  });
  return {
    // trả về mảng paths
    paths,
    fallback: false, // fallback false render ra page notfound khi paths không tồn tại
  };
};
export const getStaticProps = async (context) => {
  // gía trị context chứa id trong dynamic route
  const id = context.params.id; // lấy id từ params gửi request đến api
  const res = await fetch("http://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { coder: data },
  };
};
export default function DetailCoder({ coder }) {
  return (
    <div className="container">
      <h1 className={styles.detail}>Detail Coders</h1>
      <h3>
        FullName: {coder.name} {coder.username}
      </h3>
      <p>Email: {coder.email}</p>
      <p>Phone: {coder.phone}</p>
      <p>Website: {coder.website}</p>
      <p>Company: {coder.company.name}</p>
      <p>
        Address: Street {coder.address.street}, {coder.address.street} City
      </p>
    </div>
  );
}
