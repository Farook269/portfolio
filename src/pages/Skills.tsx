import React from 'react'
import html from "../photos/html-5.png";
import css from "../photos/css.png";
import javascript from "../photos/javascript.png";
import bootstrap from "../photos/bootstrap.png";
import react from "../photos/react.png";
import node from "../photos/node.png";
import express from "../photos/express.png";
import mongo from "../photos/mongo.png";
import mysql from "../photos/mysql.png";
import tailwind from "../photos/tailwind.png";
import java from "../photos/java.png";
import python from "../photos/python.png";
import vs from "../photos/vs.png";
import github from "../photos/github.png";
import linux from "../photos/linux.jpeg";

const Expe = () => {
  const skill1 = [
    { id: 1, src: html, title: 'HTML' },
    { id: 2, src: css, title: 'CSS' },
    { id: 3, src: javascript, title: 'JAVASCRIPT' },
    { id: 4, src: bootstrap, title: 'BOOTSTRAP' },
    { id: 5, src: react, title: 'REACT JS' },
    { id: 6, src: node, title: 'NODE JS' },
    { id: 7, src: express, title: 'EXPRESS JS' },
    { id: 8, src: mongo, title: 'MONGO DB' },
    { id: 9, src: mysql, title: 'MY SQL' },
    { id: 10, src: tailwind, title: 'TAILWIND CSS' },
  ];

  const skill2 = [
    { id: 1, src: java, title: 'JAVA' },
    { id: 2, src: python, title: 'PYTHON' },
  ];

  const skill3 = [
    { id: 1, src: vs, title: 'VS CODE' },
    { id: 2, src: github, title: 'GITHUB' },
    { id: 3, src: linux, title: 'Linux' },
  ];

  return (
    <div name="Skills" className="bg-gradient-to-b from-purple-950 w-full min-h-screen py-20 px-4">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-3xl font-bold border-b-4 border-purple-500 p-2 inline">Skills</p>
          <p className="py-4 text-gray-300 text-lg">
  A collection of technologies,  programming languages, and tools I’ve worked with to build dynamic and scalable applications.
</p>

        </div>

        <h1 className="text-2xl font-bold py-8">Web Development</h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-2 md:px-32">
          {skill1.map(({ id, src, title }) => (
            <div key={id} className="shadow-md hover:scale-110 duration-500 py-4 rounded-lg bg-white/5 border border-white/10">
              <img src={src} alt={title} className="w-16 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-bold py-8">Languages</h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-2 md:px-32">
          {skill2.map(({ id, src, title }) => (
            <div key={id} className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg bg-white/5 border border-white/10">
              <img src={src} alt={title} className="w-16 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-bold py-8">Tools / Platforms</h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-2 md:px-32">
          {skill3.map(({ id, src, title }) => (
            <div key={id} className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg bg-white/5 border border-white/10">
              <img src={src} alt={title} className="w-16 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Expe;
