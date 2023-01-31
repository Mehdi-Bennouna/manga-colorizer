import { ModalWrapper, Overlay, StyledReactCompareSlider } from "./styles";
import ReactDOM from "react-dom";
import { useState } from "react";
import color1 from "../../assets/images/color1.png";
import bw1 from "../../assets/images/bw1.png";
import color2 from "../../assets/images/color2.png";
import bw2 from "../../assets/images/bw2.jpg";
import color3 from "../../assets/images/color3.png";
import bw3 from "../../assets/images/bw3.png";
import axios from "axios";
import { GridLoader } from "react-spinners";
import { ReactCompareSliderImage } from "react-compare-slider";

type modalProps = {
  show: boolean;
  closeModal: () => void;
  type: "anime" | "sketch" | "manga";
};

export default function CreateModal({ show, closeModal, type }: modalProps) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageHere, setImageHere] = useState(false);

  const [colorImg, setColorImg] = useState<any>(null);
  const [blackWhiteImg, setBlackWhiteImg] = useState<any>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("uploading");
    const formData = new FormData();
    // @ts-ignore
    formData.append("selectedFile", selectedFile);
    console.log(formData);
    try {
      await axios({
        method: "post",
        url: "http://localhost:5000/upload",
        data: "test",
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }

    if (type === "anime") {
      setColorImg(color1);
      setBlackWhiteImg(bw1);
    }
    if (type === "sketch") {
      setColorImg(color2);
      setBlackWhiteImg(bw2);
    }
    if (type === "manga") {
      setColorImg(color3);
      setBlackWhiteImg(bw3);
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setImageHere(true);
    }, 5000);
  };

  const handleFileSelect = (event: any) => {
    console.log("Changes done");
    setSelectedFile(event.target.files[0]);
  };

  if (!show) return null;

  return ReactDOM.createPortal(
    <>
      <Overlay
        onClick={() => {
          setSelectedFile(null);
          setLoading(false);
          setImageHere(false);
          setColorImg(null);
          setBlackWhiteImg(null);
          closeModal();
        }}
      ></Overlay>
      <ModalWrapper>
        {!loading && !imageHere && (
          <>
            <h2>Colorize</h2>
            <input type="file" onChange={handleFileSelect} id="for-input" />
            <label htmlFor="for-input">Select or drop images</label>
            <button onClick={handleSubmit}>submit</button>
          </>
        )}
        {loading && <GridLoader color="#4D9BAC" />}
        {imageHere && (
          <>
            <h1>Results</h1>
            <StyledReactCompareSlider
              changePositionOnHover
              itemOne={<ReactCompareSliderImage src={colorImg} />}
              itemTwo={<ReactCompareSliderImage src={blackWhiteImg} />}
            />
          </>
        )}
      </ModalWrapper>
    </>,
    document.getElementById("portal")!
  );
}
