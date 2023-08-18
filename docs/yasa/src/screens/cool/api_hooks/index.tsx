import { useEffect } from "react";
import { useApi } from "@yasa/hooks/api";
import { useApiPagination } from "@yasa/hooks/api_pagination";
import { Button, IconButton } from "@yasa/button";
import { getRandomUser } from "docs/yasa/src/common/gen_user";
import { Alert } from "@yasa/alert";
import { BiEdit, BiErrorAlt } from "react-icons/bi";
import { Table } from "@yasa/table";
import { IoMdTrash } from "react-icons/io";
import { Pagination } from "@yasa/pagination";
import { CodeBlock } from "docs/yasa/src/common/code_block";
import code from "./code?raw";
import { stripCode } from "docs/yasa/src/common/strip_code";

const scope = {
  useEffect,
  useApi,
  useApiPagination,
  Button,
  IconButton,
  getRandomUser,
  Alert,
  BiEdit,
  BiErrorAlt,
  Table,
  IoMdTrash,
  Pagination,
};

export function ApiHooksScreen() {
  return <CodeBlock scope={scope} code={stripCode(code)} />;
}
