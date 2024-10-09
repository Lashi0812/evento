import EventList from "@/components/EventList";
import H1 from "@/components/H1";
import { TEvent } from "@/lib/type";

type EventPageParmas = {
  params: {
    city: string;
  };
};
export default async function EventsPage({ params }: EventPageParmas) {
  const city = params.city;

  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=austin"
  );
  const events: TEvent[] = await response.json();
  console.log(events);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      <EventList events={events} />
    </main>
  );
}
