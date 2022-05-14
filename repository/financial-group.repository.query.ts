import { QueryConfig } from "pg";
import { FinancialGroup } from "../model/entity/finalcial-group.entity";

export function createFinancialGroup(entity: FinancialGroup): QueryConfig {
    return {
        name: "INSERT financial-group",
        text: "INSERT INTO financial_group (id, dcc, modified_at) VALUES ($1, $2, $3)",
        values: [entity.id, entity.defaultCurrency, entity.lastModified]
    };
}
