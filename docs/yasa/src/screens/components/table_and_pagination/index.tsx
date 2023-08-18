import { IconButton } from "@yasa/button";
import { Table } from "@yasa/table";
import { Pagination } from "@yasa/pagination";
import { useMemo, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { IoMdTrash } from "react-icons/io";
import { Link } from "@yasa/link";
import { Link as RouterLink } from "react-router-dom";
import { getRandomUser } from "docs/yasa/src/common/gen_user";
import { CodeBlock } from "docs/yasa/src/common/code_block";
import { stripCode } from "docs/yasa/src/common/strip_code";
import code from "./code?raw";

const scope = {
  IconButton,
  Table,
  Pagination,
  useMemo,
  useState,
  BiEdit,
  IoMdTrash,
  Link,
  RouterLink,
  getRandomUser,
};

export function TableAndPaginationScreen() {
  return <CodeBlock scope={scope} code={stripCode(code)} />;
}
