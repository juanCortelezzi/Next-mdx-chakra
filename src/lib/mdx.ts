import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import IFrontMatter from "@typedefs/frontMatter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const postPath = path.join(process.cwd(), "src", "posts");

export async function getFiles() {
  return fs.readdirSync(postPath);
}

interface IExtendedFrontMatter extends IFrontMatter {
  wordCount: number;
}

export interface IGetFileBySlugResponse {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: IExtendedFrontMatter;
}

export async function getFileBySlug(
  slug: string
): Promise<IGetFileBySlugResponse> {
  const source = fs.readFileSync(path.join(postPath, `${slug}.mdx`), "utf8");

  const { data, content } = matter(source);
  const mdxSource = await serialize(content);

  return {
    mdxSource,
    frontMatter: {
      ...(data as IFrontMatter),
      wordCount: content.split(/\s+/gu).length,
      slug: slug,
    },
  };
}

export async function getAllFilesFrontMatter() {
  const files = fs.readdirSync(postPath);

  return files.reduce((reducer: IFrontMatter[], postSlug): IFrontMatter[] => {
    const source = fs.readFileSync(path.join(postPath, postSlug), "utf8");

    const frontMatterInfo = matter(source);

    return [
      {
        ...(frontMatterInfo.data as IFrontMatter),
        slug: postSlug.replace(".mdx", ""),
      },
      ...reducer,
    ];
  }, []);
}
