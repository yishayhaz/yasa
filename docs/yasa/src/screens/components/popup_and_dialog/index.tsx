import React from "react";
import { Dialog, Popup } from "@yasa/popup";
import { Button, IconButton } from "@yasa/button";
import { IoMdTrash } from "react-icons/io";
import { HiInformationCircle } from "react-icons/hi";
import { CodeBlock } from "docs/yasa/src/common/code_block";
import code from "./code?raw";
import { stripCode } from "docs/yasa/src/common/strip_code";

const scope = {
  React,
  Dialog,
  HiInformationCircle,
  Popup,
  Button,
  IconButton,
  IoMdTrash,
};

export function PopupAndDialogScreen() {
  return <CodeBlock scope={scope} code={stripCode(code)} />;
}
