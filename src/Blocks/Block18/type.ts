import { CorePostFields_relatedPost, CorePostFields_tag } from '../../models';

export type RelatedCardprops = {
  header: string;
  content: CorePostFields_relatedPost[];
  mode:"view" | "edit"
};

export type TagCardProps = {
  header: string;
  content: CorePostFields_tag[];
  mode: "view" | "edit"
};
