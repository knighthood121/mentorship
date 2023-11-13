// import person from "./assets/person.jpeg";
import profile_img from "../assets/person.jpeg"
import arrow from "../assets/arrow.svg"

export default function ProfileCard({ name, expertise, company }) {

    const styles = {
        profile_image: {
            height: "57px",
            borderRadius: "10px",
        },

        card: {
            // display: "flex",
            margin: "2em 0",
            width: "75%",
            // height: "75%",
            padding: "1em",
            borderRadius: "18px",
            background: "var(--main-bg-color)",
            boxShadow: "-11px -11px 22px 0px var(--light-shadow), 11px 11px 22px 0px var(--dark-shadow)",
        },

        name: {
            margin: "0",
            padding: "0 0.5em",
            color: "var(--text-color-dark)",
            fontFamily: "Poppins",
            fontSize: "1.75rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            letterSpacing: "-0.333px",

            position: "relative",
            bottom: "10px",
        },

        text: {
            margin: "0",
            padding: "0",
            color: "var(--text-color-light)",
            fontFamily: "Poppins",
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            letterSpacing: "-0.333px",
        }
    }
    return (
        <div style={styles.card}>
            <div style={{ display: "flex", alignItems: "baseline" }}>
                <img style={styles.profile_image} src={profile_img} alt="" />
                <p style={styles.name}>{name}</p>
            </div>
            {
                expertise
                    ? <p style={styles.text}>{expertise.join(" | ") + " Expert"}</p>
                    : <></>
            }

            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <p style={styles.text}>{company}</p>
                <div>
                    <img src={arrow} alt="" />
                    <img src={arrow} alt="" />
                </div>
            </div>

        </div>
    )
}