import React, { useState, useEffect } from "react";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        console.log("Form submitted");
    };

    const onChangeEmail = (event) => {
        console.log("Email changed", event.target.value);
        let email = event.target.value;
        setEmail(email);
    };

    const onChangePassword = (event) => {
        console.log("Password changed", event.target.value);
        let email = event.target.value;
        setPassword(email);
    };

    const handleOnBlurEmail = () => {
        console.log("user completed editing email");
        if (email.length < 5) {
            setError("Email must be greater than 5 characters");
            setEmail("");
        }
    };

    const handleOnBlurPassword = () => {
        if (password.length < 5)
            setError("Minimum Password length is 5 characters");
    };

    useEffect(() => {
        if (email.length > 5) {
            setError("");
        }

        if (password.length > 5) setError("");
    }, [email, password]);

    return (
        <div
            style={{
                height: "100vh",
                paddingTop: 100,
                padding: 10,
                borderRadius: 10,
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    color: "blue",
                    margin: 10,
                    fontSize: 34,
                }}
            >
                Signup
            </h1>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            > <input
                    type="name"
                    placeholder="First Name "

                    style={{
                        padding: 10,
                        margin: 10,
                        fontSize: 16,
                        borderRadius: 5,
                        backgroundColor: "white",
                        minWidth: 300,
                        color:"black"
                    }}
                />
                <input
                    type="name"
                    placeholder="Middle Name"
                    style={{
                        padding: 10,
                        margin: 10,
                        fontSize: 16,
                        borderRadius: 5,
                        backgroundColor: "white",
                        minWidth: 300,
                        color:"black"
                        
                    }}

                />
                <input
                    type="name"
                    placeholder="last Name"
                    style={{
                        padding: 10,

                        margin: 10,
                        fontSize: 16,
                        borderRadius: 5,
                        backgroundColor: "white",
                        minWidth: 300,
                        color:"black"
                    }}

                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={onChangeEmail}
                    onBlur={handleOnBlurEmail}
                    value={email}
                    style={{
                        padding: 10,
                        margin: 10,
                        fontSize: 16,
                        borderRadius: 5,
                        backgroundColor: "white",
                        minWidth: 300,
                        color:"black"
                    }}
                />

                <input
                    placeholder="Password"
                    type="password"
                    onChange={onChangePassword}
                    onBlur={handleOnBlurPassword}
                    value={password}
                    style={{
                        padding: 10,
                        margin: 10,
                        fontSize: 16,
                        borderRadius: 5,
                        minWidth: 300,
                        backgroundColor: "white",
                        color:"black"
                    }}
                />

                <p style={{ color: "crimson", margin: 16, fontSize: 20 }}>
                    {error}
                </p>

                <button
                    title="Signup"
                    backgroundColor="black"
                    disabled={error.length > 0}
                >signup</button>
            </form>
        </div>
    );
};

export default Signup;