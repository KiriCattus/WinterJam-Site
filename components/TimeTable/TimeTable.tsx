import React, { PropsWithChildren, ReactElement } from "react";
import { CountdownRendererLoader, DateRendererLoader } from "./TimeTableLoader";

interface TimeEntryProps {
  title: string;
  time: number;
  description?: string;
  className?: string;
}

function TimeEntry({
  title,
  time,
  description,
  className = "",
}: TimeEntryProps) {
  return (
    <div
      className={
        "text-center text-primary m-2 p-2 md:mb-5 md:p-5 border border-primary rounded-lg bg-secondary bg-opacity-40 shadow-lg " +
        className
      }
    >
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
        title="WinterJam 2022 begins!"
        time={Date.UTC(2022, 10, 12, 0, 0, 0)}
        description="Participants can start working on their projects and finished projects can be submitted."
      />
      <TimeEntry
        time={Date.UTC(2022, 11, 14, 0, 0, 0)}
        title="Soft modpack deadline!"
        description="We encourage you to submit beta world gen builds before this to test and pregenerate the world."
      />
      <TimeEntry
        time={Date.UTC(2022, 11, 17, 0, 0, 0)}
        title="Modpack and public servers go live!"
        description="The servers will open up and users can join in the fun! (You're required to be a member of the MMD Discord server and whitelisted to join!)"
      />
      <TimeEntry
        time={Date.UTC(2022, 11, 31, 0, 0, 0)}
        title="Submission deadline!"
        description="New submissions will not be accepted from this point on, however you can still provide minor updates and bug fixes!"
      />
      <TimeEntry
        time={Date.UTC(2023, 0, 25, 0, 0, 0)}
        title="Public server goes offline!"
        description="Backup of the save file will be made available for download."
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
    <tr className={`odd:bg-secondary`}>
      <td className="px-1 py-3 text-center border sm:px-3">
        <DateRendererLoader time={time} />
      </td>
      <td className="hidden p-3 text-center border sm:table-cell">
        <CountdownRendererLoader time={time} />
      </td>
      <td className="px-1 py-3 border sm:px-3">{children}</td>
    </tr>
  );
}
