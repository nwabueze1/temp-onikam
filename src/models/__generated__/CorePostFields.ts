import { MediaValue } from "../../helper";
export interface CorePostFields {
  content?: string;
  featured_image: MediaValue;
  title: string;
  category_name?: string;
  published_at: string;
  uuid: string;
  slug?: string;
  excerpt?: string;
  author?: CorePostFields_author;
  tags?: CorePostFields_tag[];
  related_posts?: CorePostFields_relatedPost[];
}

export interface CorePostFields_author {
  uuid: string;
  name: string;
  avatar?: { src?: string };
}

export interface CorePostFields_tag {
  uuid: string;
  name: string;
}

export interface CoreCategoriesFields {
  uuid: string;
  name: string;
}

export interface CorePostFields_relatedPost {
  title: string;
  uuid: string;
  featured_image: MediaValue;
  content: string;
  slug: string;
}
