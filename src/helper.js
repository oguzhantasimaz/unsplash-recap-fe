import html2canvas from "html2canvas";

const handleCaptureScreenshot = (element) => {
  if (element) {
    html2canvas(element, {
      allowTaint: true,
      useCORS: true,
    })
      .then((canvas) => {
        // Convert the canvas to a data URL
        const dataUrl = canvas.toDataURL("image/png");

        // Create a temporary link and trigger a download
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "screenshot.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error capturing screenshot:", error);
      });
  }
};

export { handleCaptureScreenshot };
