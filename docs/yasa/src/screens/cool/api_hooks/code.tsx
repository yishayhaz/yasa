import { useEffect } from "react";
import { useApi } from "@yasa/hooks/api";
import { useApiPagination } from "@yasa/hooks/api_pagination";
import { Button, IconButton } from "@yasa/button";
import { User, getRandomUser } from "docs/yasa/src/common/gen_user";
import { Alert } from "@yasa/alert";
import { BiEdit, BiErrorAlt } from "react-icons/bi";
import { Table } from "@yasa/table";
import { IoMdTrash } from "react-icons/io";
import { Pagination } from "@yasa/pagination";

// @end imports@ //

export function ApiHooksScreen() {
  const user = useApi(async (): Promise<User> => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) reject("Failed to fetch user");
        resolve(getRandomUser());
      }, 1000);
    });
  });

  const users = useApiPagination(
    async ({ page }): Promise<{ data: User[]; total: number }> => {
      return {
        data: Array.from({ length: 10 }, (_, idx) =>
          getRandomUser((page - 1) * 10 + idx + 1)
        ),
        total: 100,
      };
    }
  );

  useEffect(() => {
    users.fire();
  }, []);

  return (
    <article>
      <h1>Api Hooks</h1>
      <h2>useApi</h2>
      {user.isLoading ? null : user.error ? (
        <Alert
          variant="danger"
          icon={<BiErrorAlt />}
          headline={user.error.raw as string}
        ></Alert>
      ) : user.data ? (
        <div className="d-flex flex-column gap-4 align-items-start">
          <h3>Found user</h3>
          <div className="d-flex gap-10">
            <b>First name:</b>
            <span>{user.data.firstName}</span>
          </div>
          <div className="d-flex gap-10">
            <b>Last name:</b>
            <span>{user.data.lastName}</span>
          </div>
          <div className="d-flex gap-10">
            <b>Age:</b>
            <span>{user.data.age}</span>
          </div>
          <div className="d-flex gap-10">
            <b>Email:</b>
            <span>{user.data.email}</span>
          </div>
        </div>
      ) : null}
      <div>
        <Button
          style={{ width: 150 }}
          onClick={user.fire}
          isLoading={user.isLoading}
        >
          Fetch user
        </Button>
      </div>
      <h2>useApiPagination</h2>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {users.data &&
            users.data.data.map((user, idx) => (
              <tr key={idx}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>
                  <div className="d-flex justify-content-start gap-10">
                    <IconButton label="edit" size="sm" variant="neutral">
                      <BiEdit />
                    </IconButton>
                    <IconButton label="delete" size="sm" variant="danger">
                      <IoMdTrash />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination
        page={users.page}
        count={users.calcPages(users.data ? users.data.total : 0)}
        onChange={(p) => users.setPage(p)()}
      />
    </article>
  );
}
