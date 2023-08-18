import { CodeBlock } from "docs/yasa/src/common/code_block";
import code from "./code?raw";
import { stripCode } from "docs/yasa/src/common/strip_code";
import { Alert } from "@yasa/alert";
import { IoIosWarning } from "react-icons/io";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { BiMessageSquareDots } from "react-icons/bi";

const scope = {
  Alert,
  IoIosWarning,
  FaRegThumbsUp,
  MdAttachMoney,
  AiOutlineDelete,
  BiMessageSquareDots,
};

export function AlertScreen() {
  return <CodeBlock code={stripCode(code)} scope={scope} />;
}
