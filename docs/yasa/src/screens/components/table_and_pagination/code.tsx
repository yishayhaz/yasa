import { IconButton } from "@yasa/button";
import { Table } from "@yasa/table";
import { Pagination } from "@yasa/pagination";
import { useMemo, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { IoMdTrash } from "react-icons/io";
import { getRandomUser } from "docs/yasa/src/common/gen_user";

// @end imports@ //

export function TableAndPaginationScreen() {
  const [page, setPage] = useState(1);

  const data = useMemo(() => {
    const arr = [];

    for (let i = 0; i < 20; i++) {
      arr.push(getRandomUser());
    }

    return arr;
  }, []);

  return (
    <article>
      <h1>Table and Pagination</h1>
      <h2>Table</h2>
      <p>
        Table is just a native HTML table element with some style (and a div
        element as a wrapper).
      </p>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, idx) => (
            <tr key={idx}>
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
      <h2>Pagination</h2>
      <p>
        There's the component of pagination
        <br />
        and if you want more customization you can use the hook{" "}
        <code>usePagination</code> from
        <code>yasa-ui/hooks/pagination</code>
      </p>
      <Pagination page={page} count={100} onChange={setPage} />
    </article>
  );
}
