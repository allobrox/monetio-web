import BalanceIcon from "../../assets/analytics.svg";
import DebtIcon from "../../assets/chart-line-down.svg";
import ExpenseIcon from "../../assets/inbox-out.svg";
import IncomeIcon from "../../assets/inbox-in.svg";
import LogoutIcon from "../../assets/sign-out.svg";
import PlanningIcon from "../../assets/sliders-h.svg";
import SavingsIcon from "../../assets/piggy-bank.svg";
import SettingsIcon from "../../assets/cog.svg";
import styles from "./AppNavbar/AppNavbar.module.css";

export function MenuItem({ iconName }: { iconName: string }) {
    let iconComponent;
    const iconClass: string = styles.menu_item_icon;
    const iconColor: string = "#dad7dc";
    switch (iconName) {
        case "Balance":
            iconComponent = (
                <BalanceIcon className={iconClass} fill={iconColor} />
            );
            break;
        case "Debt":
            iconComponent = <DebtIcon className={iconClass} fill={iconColor} />;
            break;
        case "Expense":
            iconComponent = (
                <ExpenseIcon className={iconClass} fill={iconColor} />
            );
            break;
        case "Income":
            iconComponent = (
                <IncomeIcon className={iconClass} fill={iconColor} />
            );
            break;
        case "Log out":
            iconComponent = (
                <LogoutIcon className={iconClass} fill={iconColor} />
            );
            break;
        case "Planning":
            iconComponent = (
                <PlanningIcon className={iconClass} fill={iconColor} />
            );
            break;
        case "Savings":
            iconComponent = (
                <SavingsIcon className={iconClass} fill={iconColor} />
            );
            break;
        case "Settings":
            iconComponent = (
                <SettingsIcon className={iconClass} fill={iconColor} />
            );
            break;
    }

    return (
        <div className={styles.menu_item}>
            {iconComponent}
            <span className={styles.menu_item_text}>{iconName}</span>
        </div>
    );
}
