import Header from "../components/Header";
import profile_image from "../assets/person.jpeg"
import Button from "../components/Button";
import InputField from "../components/InputField";

export default function EditProfile() {
    const styles = {
        profile_image: {
            height: "180px",
            borderRadius: "10px",
        },

        long_input: {
            cols:"10rem",
            padding: "1rem 2rem",
            width: "50%",
            border: "none",
            outline: "none",
            margin: "0 0 0.5em 0.5em",
            color: "var(--text-color-light)",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            borderRadius: "13px",
            background: "var(--main-bg-color)",
            boxShadow: "-5px -5px 10px 0px var(--light-shadow) inset, 5px 5px 10px 0px var(--dark-shadow) inset"
        }
    }
    return (
        <div style={{ padding: "1em" }}>
            <Header text={"Edit Profile"} />

            <div style={{ display: "flex", alignItems: "flex-start" }}>

                <div>
                    <img style={styles.profile_image} src={profile_image} />
                    <Button text={"Upload"} type={"dark"} size={"big"} />
                </div>

                <div>
                    {/* <InputField placeholder={"name"} /> */}
                    <input style={styles.long_input} placeholder={"name"} />
                    <textarea style={styles.long_input} rows={'3'} placeholder="desc"/>
                    {/* <InputField placeholder={"description"} /> */}
                </div>
            </div>

            <InputField title={"Email"} placeholder={"enter your email"} />
            <InputField title={"Company Name"} placeholder={"where you work?"} />
            <InputField title={"Expertise"} placeholder={"enter everything you love"} />
        </div>
    )
}