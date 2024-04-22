import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export const getMdxSource = async(postContents: string): Promise<MDXRemoteSerializeResult> => {
  const content = postContents?.replaceAll(/<(https?:\/\/\S+)>/g, "[$1]($1)") ?? "";

  const mdxSource = await serialize(content, {
    mdxOptions: {}
  });

  return mdxSource;
}