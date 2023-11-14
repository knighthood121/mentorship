import Header from "../components/Header";
import EventDetailsFlat from "../components/EventDetailsFlat";
import Doc from "../components/Doc";

export default function Docs() {
    return (
        <div style={{ padding: "1em" }}>
            <Header text={"Docs"} />
            <EventDetailsFlat time={"2:00 to 4:00"} day={"Monday"} date={"20 aug 2023"} title={"Job market and how to set yourself apart"} />
            <Doc text={"sample-resume.pdf"}/>
            <Doc text={"job-market-analysis.pdf"}/>
            <Doc text={"interview-questions.pdf"}/>
        </div>
    )
}