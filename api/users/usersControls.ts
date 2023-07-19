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

export async function addUser(req: any, res: any) {
  try {
    const { name, password } = req.body;
    console.log(name, password);
    if (!name) throw new Error("name is required");
    if (!password) throw new Error("password is required");

    //check if such user allready exist
    const query1 = `SELECT * FROM users WHERE name='${name}'`;
    connection.query(query1, (error: any, result: any) => {

      if (error) throw new Error("error in query");

      console.log("query result", result);
      if (result.length === 0) {
        console.log("registering new user");
        const query2 = `INSERT INTO users (name, password) VALUES ("${name}", "${password}")`;
        connection.query(query2, (error: any, result: any) => {
          console.log(error);
          if (error) throw new Error("error in query");

          console.log("query result", result);
          res.send({ user: {name,password} });
        });
      } else {
        res.send({ error: "user allready exist" });
      }
    });


  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export async function searchUserById(req: any, res: any) {
  try {
    const { user_id } = req.body;
    console.log(user_id);
    if (!user_id) throw new Error("user id are required");
    const query = `SELECT * FROM users
    WHERE user_id LIKE '%${user_id}%' LIMIT 1`;
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
