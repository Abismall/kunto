"use client";

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');

  const handleMarkdownChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <textarea
        value={markdown}
        onChange={handleMarkdownChange}
        className="w-full h-96 p-2 border rounded-md"
        placeholder="Write your markdown here..."
      />
      <div className="prose prose-lg bg-white p-4 rounded-md shadow">
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
};

export default MarkdownEditor;
