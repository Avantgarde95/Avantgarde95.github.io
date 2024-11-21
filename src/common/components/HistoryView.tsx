import { ReactNode } from "react";

interface HistoryItem {
  id: string;
  duration: { start: string; end?: string };
  title: ReactNode;
  subtitle?: ReactNode;
  content?: ReactNode;
}

interface HistoryViewProps {
  items: Array<HistoryItem>;
}

const HistoryView = ({ items }: HistoryViewProps) => (
  <div>
    {items.map((item, index) => (
      <div key={item.id} className="flex flex-row">
        <div className="flex w-14 shrink-0 flex-col md:w-36 md:flex-row">
          <span>{item.duration.start} -</span>
          <span className="hidden md:inline">&nbsp;</span>
          <span>{item.duration.end ?? "..."}</span>
        </div>
        <div className="flex flex-col items-center font-mono">
          +
          <div className="w-[2px] flex-1 bg-gray" />
        </div>
        <div className="ml-2">
          <div className="mt-[0.05rem]">{item.title}</div>
          {item.subtitle && <div className="text-gray">{item.subtitle}</div>}
          {item.content && <div className="mt-2">{item.content}</div>}
          {index < items.length - 1 && <div className="h-4" />}
        </div>
      </div>
    ))}
  </div>
);

export default HistoryView;
