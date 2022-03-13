import axios from "axios";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoPaperPlaneOutline } from "react-icons/io5";
import "./Form.css";

export const Form: React.FC = (props) => {
    const [dataSaved, setDataSaved] = useState(false);
    const [error, setError] = useState(false);
    const [jsError, setJsError] = useState(false);
    const [formData, setFormData] = useState({ email: "" });

    /**
     * @function handleFormSubmit
     * @param e { obj } - form event
     * @return void
     */
    const handleFormSubmit = (e: any) => {
        e.preventDefault();

        const email = formData["email"];
        if (!validateEmail(email)) {
            setJsError(true);
        } else {
            setJsError(false);
            let data = {
                ...formData,
                page: window.location.href,
            };

            axios({
                method: "post",
                url: "save.php",
                headers: { "content-type": "application/json" },
                data: data,
            })
                .then((result) => {
                    console.log(result);
                    if (result.data === "success") {
                        setDataSaved(true);
                        setError(false);
                    } else {
                        setError(true);
                    }
                })
                .catch((error) => setError(error.message));
        }
    };

    /**
     * @function handleChange
     * @param e { obj } - change event
     * @param field { string } - name of the field
     * @return void
     */
    const handleChange = (e: any, field: string) => {
        let value = e.target.value;
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const validateEmail = (email: string): boolean => {
        const re = new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        return re.test(String(email).toLowerCase());
    };

    const aggregateErrors = (error: boolean, jsError: boolean): string => {
        if (jsError) {
            return "Your email does not validate. ";
        }
        if (error) {
            return "Something seems to not work.";
        }
        return "";
    };

    return (
        <>
            {!dataSaved && (
                <form action="#">
                    <input
                        type="email"
                        required
                        placeholder="Your email address"
                        onChange={(e) => handleChange(e, "email")}
                    />
                    <div className="submit-button">
                        <input
                            type="submit"
                            onClick={(e) => handleFormSubmit(e)}
                            value=" "
                        />
                    </div>
                    <IconContext.Provider value={{ className: "icon" }}>
                        <IoPaperPlaneOutline />
                    </IconContext.Provider>
                </form>
            )}
            <p className="error">{aggregateErrors(error, jsError)}</p>
            {dataSaved && <p className="success">Thanks for signing up!</p>}
        </>
    );
};

export default Form;
