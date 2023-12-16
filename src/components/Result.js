import React, { useRef } from "react";
import store from "../store";
import { handleCaptureScreenshot } from "../helper";
import ResultImage from "./ResultImage";
import ResultStatistic from "./ResultStatistic";
import ResultDownload from "./ResultDownload";

export default function Result() {
  const { recap } = store();

  const divRef = useRef(null);

  return (
    <div>
      <div className="mt-10 grid gap-10 p-5 md:mt-16 md:gap-16" ref={divRef}>
        <ResultStatistic />

        <div className="col-span-1 grid grid-cols-1 gap-10 md:grid-cols-2">
          {recap.top_photos.map((photo) => {
            return <ResultImage photo={photo} key={photo.slug} />;
          })}
        </div>
      </div>

      <ResultDownload onClick={() => handleCaptureScreenshot(divRef.current)} />
    </div>
  );
}
