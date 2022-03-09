import { useState } from "react";
import styles from "../../../styles/Plan.module.css";
import { Form } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

export const CategorySlider = ({
    categoryId,
    categoryName,
    min,
    max
}: {
    categoryId: string;
    categoryName: string;
    min: number;
    max: number;
}) => {
    const [value, setValue] = useState("0");

    function setInputValue(newValue: string): void {
        if (newValue.endsWith(".")) {
            setValue(newValue);
        } else {
            let numValue = Number(newValue);
            if (numValue > max) {
                numValue = max;
            }

            // TODO implement 1k for 1000 value displaying
            setValue(numValue.toString());
        }
    }

    return (
        <Form.Group className={styles.category}>
            <Form.Label>{categoryName}</Form.Label>
            <p className={styles.max}>{`Max: ${max}`}</p>
            <div className={styles.slider_input_group}>
                <RangeSlider
                    className={styles.slider}
                    value={value}
                    onChange={e => setInputValue(e.target.value)}
                    min={min}
                    max={max}
                    step={0.01}
                    size={"lg"}
                />
                <Form.Control
                    className={styles.category_text_input}
                    value={value}
                    size={"sm"}
                    onChange={e => setInputValue(e.target.value)}
                />
            </div>
        </Form.Group>
    );
};
