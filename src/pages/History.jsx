import Header from "../components/Header";
import EventCard from "../components/EventCard";

export default function History() {
    return (
        <div style={{ padding: "1em" }}>
            <Header text={"History"} />
            <EventCard time="2:00 to 4:00" day="Monday" date="20 aug 2023" title="Job market and how to set tourself apart" type="done"/>
            <EventCard time="6:00 to 7:30" day="Sunday" date="22 aug 2023" title="Introduction to the Technical Industry" type="done"/>
        </div>
    )
}