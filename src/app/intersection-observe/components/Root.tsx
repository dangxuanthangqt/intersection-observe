"use client";

import React, { useEffect, useState } from "react";
import Todo from "./Todo";

export default function Root({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const observe = new window.IntersectionObserver(
      (entries) => {
        console.log("entries", entries);
      },
      {
        threshold: 0.5,
      }
    );
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));

    console.log("data", data);
  }, []);

  return (
    <div
      id="scroller-id"
      style={{
        width: 600,
        height: 300,
        overflow: "auto",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {data.map((data, index) => {
        return <Todo key={index} todo={data}></Todo>;
      })}
      {/* <Todo observe={observe} todo={{ title: "11111111111111111111" }}></Todo>
      <Todo observe={observe} todo={{ title: "2222222222222222222" }}></Todo>
      <BlockTest></BlockTest>

      <BlockTest></BlockTest>

      <BlockTest></BlockTest>

      <BlockTest></BlockTest>
      <BlockTest></BlockTest>
      <BlockTest></BlockTest>
      <BlockTest></BlockTest>
      <BlockTest></BlockTest>
      <BlockTest></BlockTest>
      <BlockTest></BlockTest>
      <BlockTest></BlockTest>
      <BlockTest></BlockTest>
      <BlockTest></BlockTest> */}
    </div>
  );
}

const BlockTest = () => {
  return (
    <div
      style={{
        width: 200,
        backgroundColor: "blue",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        flexWrap: "wrap",
        margin: 20,
      }}
    >
      123123
    </div>
  );
};
