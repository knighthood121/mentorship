import logo from "../assets/logo.svg";

export default function Header({ text }) {

    const styles = {
        h1: {
            color: "var(--text-color-dark)",
            fontFamily: "Poppins",
            fontSize: "55px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "42px",
            letterSpacing: "-0.333px",

            width: "60%"
        },

        img: {
            width: "60px",
            // height: "51.608px",
        },

        div: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // margin: "0rem 1rem"

        },

        img_div: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "75px",
            height: "75px",
            fill: "var(--main-bg-color)",
            borderRadius: "100px",
            boxShadow: "2px 2px 4px 0px var(--dark-shadow) inset, -2px -2px 4px 0px var(--light-shadow) inset",
        }
    }
    return (
        <div style={styles.div}>
            <h1 style={styles.h1}>{text}</h1>
            <div style={styles.img_div}>
                <img style={styles.img} src={logo} />
            </div>
        </div>
    )
}