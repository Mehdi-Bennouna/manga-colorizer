import { useState } from "react";
import CreateModal from "../CreateModal";
import { CreateMain, CreateWrapper } from "./style";

export default function Create() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState<"anime" | "manga" | "sketch">("anime");

  function closeModal() {
    setShow(false);
  }

  function openModal() {
    setShow(true);
  }
  return (
    <CreateWrapper>
      <h1 id="Create">Create</h1>
      <p>Use one of the pretrained models to get best results</p>
      <CreateMain>
        <button
          onClick={() => {
            setType("anime");
            openModal();
          }}
        >
          Anime
        </button>
        <button
          onClick={() => {
            setType("manga");
            openModal();
          }}
        >
          Manga
        </button>
        <button
          onClick={() => {
            setType("sketch");
            openModal();
          }}
        >
          Sketch
        </button>
      </CreateMain>
      <CreateModal show={show} closeModal={closeModal} type={type} />
    </CreateWrapper>
  );
}
