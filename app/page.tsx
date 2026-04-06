import ExplorBtn from "@/components/explorBtn";
import EventsCards from "@/components/EventsCards";
import {events} from "@/lib/constants";

const Page = () => {
    return (
        <section>
            <h1 className=" text-center capitalize">the hub of every dev <br /> you can`t miss</h1>
            <p className="text-center mt-5 text-gray-300">  hackathons, meetups, conferences all in one place</p>
            <ExplorBtn />
            <div className=" mt-20 space-y-7">
                Featured Events
                <ul className="events">
                    {events.map((event) => (
                        <li key={event.title}>
                            <EventsCards {...event} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default Page