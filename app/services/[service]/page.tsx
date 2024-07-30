import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import fs from 'fs';

const errorMarkdown = `
# Error

## Error Loading Service File

We encountered an error while trying to load the service file. Please check the service name and try again.

If the issue persists, contact our support team for assistance.

[Return to Home](http://localhost:3000)
`;

const fetchContent = (file: string) => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'services', file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContent);
    return content;
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return errorMarkdown;
  }
};

export default async function Page({
  params: { article },
}: {
  params: { article: string };
}) {
  const content = fetchContent(`${article.toLowerCase()}.md`);

  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen mt-8 p-6">
      <ReactMarkdown className="prose lg:prose-2xl md:prose-2xl xl:prose-2xl" rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
