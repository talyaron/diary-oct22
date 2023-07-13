import { connection } from "../../server";

export async function getUsers(req: any, res: any) {
    try {

        //get all users from db

        const query = "SELECT * FROM users";
        connection.query(query, (error: any, result: any) => {
            console.log(error)
            if (error) throw new Error("error in query");

            console.log("query result", result);
            res.send({ users: result });

        })

    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}