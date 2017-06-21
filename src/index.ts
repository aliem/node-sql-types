export type onSqlEvent =
    | "restrict"
    | "cascade"
    | "no action"
    | "set null"
    | "set default"
    ;

export interface IReference {
    references: {
        table: string,
        column: string,
        onDelete?: onSqlEvent;
        onUpdate?: onSqlEvent;
    }
}

/*
 * Types
 */
export const SQLSerial = {
    jsType: 1,
    primaryKey: true,
    dataType: "int",
    notNull: true,
    unique: true,
};

export const SQLInt = {
    jsType: 1,
    dataType: "int",
    notNull: true,
};

export const SQLString = {
    jsType: "",
    dataType: "varchar(255)",
};

export const SQLText = {
    jsType: "",
    dataType: "text",
};

export const SQLDateTime = {
    jsType: new Date,
    dataType: "DateTime",
};

/*
 * SQL Reference.
 *
 * returns an augmented type with a reference definition
 */
export function SQLRef<T>(
    kind: T,
    table: string,
    column: string,
    onDelete?: onSqlEvent,
    onUpdate?: onSqlEvent,
): T & IReference {
    const ref = {
        references: {
            table, column, onDelete, onUpdate,
        },
    };

    return Object.assign({}, kind, ref);
}
