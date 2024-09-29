export type GetFormProps = {
  position: string;
  client: { [key: string]: any };
  layouts: { name: string; isSelected: boolean }[];
  content: { [p: string]: any };
};
