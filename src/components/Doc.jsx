import download from "../assets/download.svg"

export default function Doc({text}){

    const styles = {
        text: {
            color: "#5B574E",
            margin: "0",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        },

        div: {
            display: "flex",
            justifyContent: "space-between",
            padding: "1em 2em",
            margin: "1em 0em",
            borderRadius: "18px",
            background: "#E0E0E0",
            boxShadow: "-4px -4px 8px 0px #FFF, 4px 4px 8px 0px #BEBEBE",
        }
    }

    return (
        <div style={styles.div}>
            <p style={styles.text}>{text}</p>
            <img src={download}/>
        </div>
    )
}