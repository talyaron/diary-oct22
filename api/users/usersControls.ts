import { connection } from "../../server";

export async function getUsers(req: any, res: any) {
  try {
    //get all users from db

    const query = "SELECT * FROM users";
    connection.query(query, (error: any, result: any) => {
      console.log(error);
      if (error) throw new Error("error in query");

      console.log("query result", result);
      res.send({ users: result });
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}
export async function createUser(req: any, res: any) {
  try {
    const { name } = req.body;

    const query = `INSERT INTO users (name) values ("${name}")`;
    connection.query(query, (error: any, result: any) => {
      console.log(error);
      if (error) throw new Error("error in query");

      console.log("query result", result);
      res.send({ users: result });
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export async function deleteUser(req: any, res: any) {
  try {
    const { id } = req.body;

    const query = `DELETE FROM users WHERE user_id='${id}';`;
    connection.query(query, (error: any, result: any) => {
      console.log(error);
      if (error) throw new Error("error in query");

      console.log("query result", result);
      res.send({ users: result });
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}
