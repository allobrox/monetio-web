export interface Claims {
    expiry?: number;
    defaultCurrencyCode?: string;
    groupId: string;
    sub: string;
    wallets: string[];
}
