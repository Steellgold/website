"use client";

import { ReactElement } from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import styles from "./mdx.module.css";

export const MDX = ({ source }: { source: MDXRemoteProps }): ReactElement => {
  return (
    <article
      className={`prose-md prose prose-stone m-auto w-11/12 dark:prose-invert sm:prose-lg sm:w-3/4 ${styles.root}`}
      suppressHydrationWarning={true}
    >
      <MDXRemote {...source} components={{
        pre: (props) => <>
          <pre {...props} className="overflow-x-auto overflow-y-hidden p-4 rounded bg-stone-800 text-stone-100 my-4" />
        </>,
        code: (props) => <code {...props} className="font-mono text-sm bg-stone-800 text-stone-100 p-1 rounded" />,
        a: (props) => <a {...props} className="text-blue-500 hover:underline" />,
        h1: (props) => <p {...props} className="text-lg font-bold text-white my-4" />,
        h2: (props) => <p {...props} className="text-lg font-bold text-white my-4" />,
        h3: (props) => <p {...props} className="text-lg font-bold text-white my-4" />,
        h4: (props) => <p {...props} className="text-lg font-bold text-white my-4" />,
        h5: (props) => <p {...props} className="text-lg font-bold text-white my-4" />,
        h6: (props) => <p {...props} className="text-lg font-bold text-white my-4" />,
        p: (props) => <p {...props} className="text-stone-400 my-1" />,
        ul: (props) => <ul {...props} className="list-disc list-inside" />,
        ol: (props) => <ol {...props} className="list-decimal list-inside" />,
        li: (props) => <li {...props} className="text-stone-400" />,
        blockquote: (props) => <blockquote {...props} className="border-l-4 border-stone-400 pl-4" />,
        img: (props) => <img {...props} className="my-4" />,
        hr: (props) => <hr {...props} className="my-4" />,
        table: (props) => <table {...props} className="table-auto w-full" />,
        thead: (props) => <thead {...props} className="bg-stone-800 text-stone-100" />,
        tbody: (props) => <tbody {...props} className="bg-stone-800 text-stone-100" />,
        th: (props) => <th {...props} className="p-2" />,
        td: (props) => <td {...props} className="p-2" />,
        tr: (props) => <tr {...props} className="border-b border-stone-400" />,
        abbr: (props) => <abbr {...props} className="text-blue-500" />,
        address: (props) => <address {...props} className="text-stone-400" />,
        strong: (props) => <strong {...props} className="font-bold" />,
        em: (props) => <em {...props} className="italic" />,
        del: (props) => <del {...props} className="line-through" />,
        sub: (props) => <sub {...props} className="text-stone-400" />,
        sup: (props) => <sup {...props} className="text-stone-400" />,
        kbd: (props) => <kbd {...props} className="font-mono text-stone-400" />,
        samp: (props) => <samp {...props} className="font-mono text-stone-400" />,
        q: (props) => <q {...props} className="text-stone-400" />,
        cite: (props) => <cite {...props} className="text-stone-400" />
      }} />
    </article>
  );
}