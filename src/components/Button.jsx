import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, type, ...props }) => {
    return (
        <button className={styles.button + " " + type} {...props}>
            {children}
        </button>
    );
};

export default Button;
