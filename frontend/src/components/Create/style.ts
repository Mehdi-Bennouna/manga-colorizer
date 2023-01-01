import styled from "styled-components";

const CreateWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 5rem 0;
  h1 {
    font-family: "Roboto";
    font-size: 48px;
    font-weight: 600;
  }

  p {
    font-family: "Roboto";
    font-size: 28px;
    font-weight: 300;
    color: #6c7176;
  }
`;

const CreateMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 7rem;
  margin-top: 2rem;
  padding: 5rem;
  box-shadow: 11px 12px 29px 2px rgba(0, 0, 0, 0.2);

  & button:nth-child(1) {
    background-image: url("images/Anime.png");

    &:hover {
      background-image: none;
    }

    &:hover::before {
      background-image: url("images/Anime.png");
    }
  }

  & button:nth-child(2) {
    background-image: url("images/Manga.jpg");
    
    &:hover {
      background-image: none;
    }
    
    &:hover::before {
      background-image: url("images/Manga.jpg");
    }
  }

  & button:nth-child(3) {
    background-image: url("images/Sketch.jpg");

    &:hover {
      background-image: none;
    }

    &:hover::before {
      background-image: url("images/Sketch.jpg");
    }
  }

  button {
    position: relative;
    background-color: transparent;
    border-width: 0;
    font-style: inherit;
    line-height: inherit;
    padding: 0;
    background-size: cover;

    font-family: "Roboto";
    font-size: 48px;
    font-weight: 600;
    color: transparent;
    
    height: 18rem;
    width: 18rem;
    
    &:hover {
      color: #fff;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    }

    &:hover::before {
      background-size: cover;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      filter: blur(2px) brightness(80%);
    }

    transition: 0.3s;
  }
`;

export { CreateWrapper, CreateMain };
