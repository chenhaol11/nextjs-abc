// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Hello({ data }) {
  const router = useRouter();
  const [name, setName] = useState('');
  console.log(data);
  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/users/1')
  //     .then((response) => {
  //       // console.log(response.data);
  //       setName(response.data.name);
  //     });
  // }, []);
  return <div>name: {data.name}</div>;
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  console.log(context);
  const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  const data = res.data;

  // Pass data to the page via props
  return { props: { data } };
}
