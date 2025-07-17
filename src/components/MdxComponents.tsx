import React from 'react';

// Custom component for the <pre> tag
const Pre = ({ children }: { children?: React.ReactNode }) => {
  return (
    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
      {children}
    </pre>
  );
};

export const mdxComponents = {
  pre: Pre,
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => <h1 className="text-4xl font-bold my-6" {...props} />,
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => <h2 className="text-3xl font-bold my-5" {...props} />,
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => <h3 className="text-2xl font-bold my-4" {...props} />,
  p: (props: React.HTMLProps<HTMLParagraphElement>) => <p className="my-4" {...props} />,
};