import { Link } from "react-router-dom"

export default function Button({ text, type, size, path, onClick }) {
    const styles = {
        button: {
            border: "none",
            padding: size == "big" ? "0.5rem 3rem" : "0.25rem 1.5rem",
            margin: size == "big" ? "0.5em 0em" : "0",
            color: type == "light" ? "var(--text-color-dark)" : "#E0E0E0",
            transition: "0.3s",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: size == "big" ? "24px" : "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            letterSpacing: "-0.333px",
            borderRadius: "9px",
            background: type == "light" ? "var(--main-bg-color)" : "#37352F",
            boxShadow: type == "light" ?
                "4px 4px 8px 0px var(--dark-shadow), -4px -4px 8px 0px var(--light-shadow)"
                : "5px 5px 5px 0px #161513 inset, -5px -5px 5px 0px #58554B inset",
        },
    }

    function go_in(event) {
        event.target.style.boxShadow = "none"
    }
    function come_out(event) {
        event.target.style.boxShadow = styles.button.boxShadow
    }
    return (
        <>
            <Link to={path}>
                <button style={styles.button} onTouchStart={go_in} onTouchEnd={come_out} onClick={onClick ? () => onClick() : () => {}}>{text}</button>
            </Link>
        </>
    )
}