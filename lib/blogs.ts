// "use client";

import type { Collection, Document, WithId } from "mongodb";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

const DB_NAME = process.env.MONGODB_DB ?? "dhruvdankhara";
const COLLECTION = process.env.MONGODB_COLLECTION ?? "blogs";

export interface BlogDocument extends Document {
  _id: ObjectId;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  read_time: string;
  content: string;
  author?: string;
  author_title?: string;
  image_url?: string;
  tags?: string[] | { tags: string[] };
}

export interface BlogSummary {
  _id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  read_time: string;
  image_url?: string;
}

export interface BlogPost extends BlogSummary {
  content: string;
  author?: string;
  author_title?: string;
  tags?: string[];
}

const normalizeTags = (tags?: BlogDocument["tags"]): string[] => {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags;
  return tags.tags ?? [];
};

const toSummary = (doc: WithId<BlogDocument>): BlogSummary => ({
  _id: doc._id.toString(),
  title: doc.title,
  slug: doc.slug,
  category: doc.category,
  date: doc.date,
  excerpt: doc.excerpt,
  read_time: doc.read_time,
  image_url: doc.image_url,
});

const toFullPost = (doc: WithId<BlogDocument>): BlogPost => ({
  ...toSummary(doc),
  content: doc.content,
  author: doc.author,
  author_title: doc.author_title,
  tags: normalizeTags(doc.tags),
});

const getCollection = async (): Promise<Collection<BlogDocument>> => {
  const client = await clientPromise;
  return client.db(DB_NAME).collection<BlogDocument>(COLLECTION);
};

export const getBlogs = async (): Promise<BlogSummary[]> => {
  const collection = await getCollection();
  const docs = await collection
    .find(
      {},
      {
        sort: { date: -1 },
        projection: {
          title: 1,
          slug: 1,
          category: 1,
          date: 1,
          excerpt: 1,
          read_time: 1,
          image_url: 1,
        },
      }
    )
    .toArray();

  return docs.map(toSummary);
};

export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  const collection = await getCollection();
  const doc = await collection.findOne({ slug });
  return doc ? toFullPost(doc as WithId<BlogDocument>) : null;
};
