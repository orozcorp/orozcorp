"use client";
import { useState } from "react";
import Modal from "../../../components/atoms/Modal";

export default function SendMessage({ display, setDisplay, contacts }) {
  return (
    <Modal display={display} setDisplay={setDisplay}>
      SendMessage
    </Modal>
  );
}
