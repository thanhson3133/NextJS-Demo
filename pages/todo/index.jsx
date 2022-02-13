import Link from "next/link";
import React from "react";
import styles from "../../styles/todo.module.css"; 
export const getStaticProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return {
    props: { data: data },
  };
};

export default function ToDoPage({ data }) {
  const getTodoList = () => {
    return data.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.completed.toString()}</td>
          <td><Link href={"/todo/" + item.id} key={item.id}><button>Detail</button></Link></td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{getTodoList()}</tbody>
      </table>
    </div>
  );
}
