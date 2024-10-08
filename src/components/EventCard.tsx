import { TEvent } from "@/lib/type";
import Image from "next/image";

type EventCardProps = {
  event: TEvent;
};
export default function EventCard({ event }: EventCardProps) {
  return (
    <section className="flex-1 basis-80  w-full h-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative">
      <Image
        src={event.imageUrl}
        alt="Event image"
        width={500}
        height={280}
        className="h-[60%] object-cover"
      />
      <div className="flex flex-col flex-1 justify-center items-center">
        <h2 className="text-2xl text-semibold">{event.name}</h2>
        <p className="italic text-white/75">By {event.organizerName}</p>
        <p className="text-sm text-white/50 mt-4">{event.location}</p>
      </div>
      <section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
        <p className="text-xl font-bold -mb-[5px]">
          {new Date(event.date).toLocaleDateString("en-US", {
            day: "2-digit",
          })}
        </p>
        <p className="text-xs uppercase text-accent">
          {new Date(event.date).toLocaleDateString("en-US", {
            month: "short",
          })}
        </p>
      </section>
    </section>
  );
}
