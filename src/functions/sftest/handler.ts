import { configure, Connection, createConnection } from "snowflake-sdk";

configure({ logLevel: "TRACE" });

const sftest = async (event) => {
  const account = process.env.SF_ACCOUNT;
  const database = process.env.SF_DATABASE;
  const username = process.env.SF_USERNAME;
  const password = process.env.SF_PASSWORD;
  const role = process.env.SF_ROLE;
  const warehouse = process.env.SF_WAREHOUSE;

  const connection = await new Promise<Connection>((resolve, reject) => {
    console.info(">>>>> Connecting to SF...");
    const connection = createConnection({
      account,
      database,
      username,
      password,
      role,
      warehouse,
    });
    connection.connect((error, conn) => {
      if (error) {
        console.error("Error connecting to Snowflake:");
        console.error(error.message);

        return reject(error);
      }
      console.info(">>>>> SF connected");

      return resolve(conn);
    });
  });

  return { connectionId: connection.getId() };
};

export const main = sftest;
