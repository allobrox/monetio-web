import TestIcon from "../../assets/calendar-alt.svg";
import styles from "../../styles/Balance.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

export const MonthSelector = () => {
    const [selectedMonth, setSelectedMonth] = useState(new Date());
    const [showMonthPicker, setShowMonthPicker] = useState(false);

    return (
        <div className={styles.month_picker}>
            <div onClick={() => setShowMonthPicker(!showMonthPicker)}>
                <TestIcon className={styles.menu_item_icon} fill={"#000000"} />
                <span className={styles.menu_item_text}>
                    {format(selectedMonth, "MMM yyyy")}
                </span>
            </div>
            {showMonthPicker && (
                <div className={styles.date_picker}>
                    <DatePicker
                        inline={true}
                        selected={selectedMonth}
                        onChange={(date: Date) => {
                            setSelectedMonth(date);
                            setShowMonthPicker(false);
                        }}
                        showMonthYearPicker
                    />
                </div>
            )}
        </div>
    );
};
