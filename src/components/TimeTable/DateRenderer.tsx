export default function DateRenderer({ time }: { time: number }) {
  return (
    <>
      {new Date(time).toLocaleString([], {
        month: "long",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit",
      })}
    </>
  );
}
