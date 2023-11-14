export default function OutputField({ title, text }) {

    const styles = {
        input: {
            padding: "1rem 2rem",
            border: "none",
            outline: "none",
            margin: "0.5em 0",
            color: "var(--text-color-light)",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            borderRadius: "13px",
            background: "var(--main-bg-color)",
            boxShadow: "-5px -5px 10px 0px var(--light-shadow), 5px 5px 10px 0px var(--dark-shadow)",
        },

        title: {
            color: "var(--text-color-light)",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            margin: "0em"
        }
    }

    return (
        <div>
            <p style={styles.title}>{title}</p>
            <p style={styles.input}>{text}</p>
        </div>
    )
}