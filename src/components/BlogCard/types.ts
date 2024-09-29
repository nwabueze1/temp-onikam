export type BlogCardProps = {
  type: string;
  arrow: boolean;
  blogContent: { [key: string]: any };
  mode: "view" | "edit"
};
