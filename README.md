# SQLTypes

> Simple SQL column type definition for [node-sql](https://github.com/brianc/node-sql)

## Examples

Define a table:

    import * as Sql from "sql";
    import { SQLSerial, SQLInt, SQLString, SQLText, SQLRef } from "./sql_types";

    export const Todo = Sql.define({
        schema: "public",
        name: "todo",
        columns: {
            id: SQLSerial,
            user_id: SQLString,
            client_id: SQLString,
            job_id: SQLRef(SQLInt, "jobs", "id"),
            title: SQLString,
            description: SQLText,
        },
    });

Extend a type:


    import { SQLSerial, SQLInt, SQLString, SQLText, SQLRef } from "./sql_types";
    
    const SQLBigInt = Object
        .assign({}, SQLInt, { dataType: "bigint" });

# License

ISC
