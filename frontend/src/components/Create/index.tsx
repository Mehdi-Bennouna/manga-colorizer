import { CreateMain, CreateWrapper } from "./style";

export default function Create() {
  return (
    <CreateWrapper>
      <h1>Create</h1>
      <p>Use one of the pretrained models to get best results</p>
      <CreateMain>
        <button>Anime</button>
        <button>Manga</button>
        <button>Sketch</button>
      </CreateMain>
    </CreateWrapper>
  );
}
