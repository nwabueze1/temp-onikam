import { parse } from "node-html-parser";

export const useCalculateMinutesRead = () => {
    const extractTextFromHtml = (html: string) => {
       return parse(html ?? "<p></p>").textContent;
    }
  
    const calculateMinutesRead = (content: string) => {
      const wordCount = (extractTextFromHtml(content) ?? content).split(/\s+/).length;
      const minutesRead = Math.ceil(wordCount / 250);
      return minutesRead <= 1 ? "1 minute read" : minutesRead + " minutes read";
    };
  
    return calculateMinutesRead;
  };