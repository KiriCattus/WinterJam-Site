import React, { PropsWithChildren, ReactElement } from "react";
import { CountdownRendererLoader, DateRendererLoader } from "./TimeTableLoader";

interface TimeEntryProps {
  title: string;
  time: number;
  description?: string;
  className?: string;
}

function TimeEntry({ title, time, description, className }: TimeEntryProps) {
  return (
    <div className={"text-center text-white mb-5 md:mb-10 " + className}>
      <div className="text-xl font-bold underline">{title}</div>
      <div className="text-lg">
        <DateRendererLoader time={time} />
      </div>
      <div className="text-lg">
        <CountdownRendererLoader time={time} />
      </div>
      {description ? <div>{description}</div> : null}
    </div>
  );
}

export function TimeTable() {
  return (
    <div className="md:grid md:grid-cols-2">
      <TimeEntry
        title="WinterJam 2021 begins!"
        time={Date.UTC(2021, 11, 1, 0, 0, 0)}
        description="Participants can start working on their projects and finished projects can be submitted."
      />
      <TimeEntry
        time={Date.UTC(2021, 11, 21, 0, 0, 0)}
        title="ModPack and Public server go live"
        description="Participants are
            encouraged to submit alpha builds before this date"
      />
      <TimeEntry
        time={Date.UTC(2021, 10, 1, 0, 0, 0)}
        title="Submission window will be closed"
        description="New submissions will not be
            accepted"
      />
      <TimeEntry
        time={Date.UTC(2021, 10, 7, 0, 0, 0)}
        title="Winners announced!"
      />
      <TimeEntry
        time={Date.UTC(2021, 10, 14, 20, 0, 0)}
        title="Public server goes offline"
        description="Backup of the save file will be
        made available for download"
        className="col-span-2"
      />
    </div>
  );
}

function TimeRow({
  time,
  children,
}: PropsWithChildren<{ time: number }>): ReactElement {
  return (
    <tr className={`odd:bg-gray-900`}>
      <td className="border px-1 sm:px-3 py-3 text-center">
        <DateRendererLoader time={time} />
      </td>
      <td className="hidden sm:table-cell border p-3 text-center">
        <CountdownRendererLoader time={time} />
      </td>
      <td className="border px-1 sm:px-3 py-3">{children}</td>
    </tr>
  );
}
