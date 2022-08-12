import { remark } from "remark";
import strip from "strip-markdown";

export function formatTime(time: number) {
  return formatDate(new Date(time));
}

export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const monthDay = date.getDate();

  return `${`${year}`.padStart(4, "0")}-${`${month}`.padStart(2, "0")}-${`${monthDay}`.padStart(2, "0")}`;
}

export function extractTextFromMarkdown(markdown: string) {
  const file = remark().use(strip).processSync(markdown);
  return String(file);
}
