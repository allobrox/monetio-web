export const BalanceElement = ({
    amount,
    className,
    currency,
    label
}: {
    amount: string;
    className: string;
    currency: string;
    label: string;
}) => {
    return <div className={className}>{`${label}: ${amount}${currency}`}</div>;
};
