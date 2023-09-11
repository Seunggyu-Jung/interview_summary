import React from 'react';
import data from 'data/contents.json';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

export default function ContentItem() {
  const { id } = useParams();

  const post = data[0].items.find(item => item.id === id);

  if (!post) {
    return <div></div>;
  }
  return (
    <div>
      <h2 id="title">{post?.title}</h2>
      <section>{post?.topic}</section>
      <section id="content">
        <ReactMarkdown>{post?.texture}</ReactMarkdown>
      </section>
      <section id="qna">
        <ReactMarkdown>{post?.qna}</ReactMarkdown>
      </section>
    </div>
  );
}
