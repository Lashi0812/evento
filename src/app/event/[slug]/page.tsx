import { TEvent } from "@/lib/type";

type EventPageProps = {
  events: TEvent[];
};
export default function EventPage({ events }: EventPageProps) {
  return (
    <section>
      {events.map((event) => (
        <div key={event.id}>{event.name}</div>
      ))}
    </section>
  );
}
