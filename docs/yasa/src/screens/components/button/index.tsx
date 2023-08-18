import { Button, IconButton, BaseButton } from "@yasa/button";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { useState } from "react";
import code from "./code?raw";
import { CodeBlock } from "docs/yasa/src/common/code_block";
import { stripCode } from "docs/yasa/src/common/strip_code";

const scope = {
  Button,
  IconButton,
  BaseButton,
  BiPlus,
  Link,
  LuEye,
  useState,
};

export function ButtonScreen() {
  return <CodeBlock code={stripCode(code)} scope={scope} />;
}
