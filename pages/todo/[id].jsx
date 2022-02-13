import React from 'react'

export const getStaticPaths = async () => {
    const res = await fetch("http://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    const paths = data.map((item) =>{
        return{
            params : {id: item.id.toString()}
        }
    })
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch("http://jsonplaceholder.typicode.com/todos/" + id);
    const data = await res.json();
    return {
        props: {data: data}
    }
}
export default function TodoDetails({data}) {
  return (
    <div>
        <h1>Todo Details</h1>
        <p>UserId: {data.userId}</p>
        <p>Title: {data.title}</p>
        <p>thanhson</p>
    </div>
  )
}
