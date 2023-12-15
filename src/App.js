import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import { Analytics } from "@vercel/analytics/react";
import "./input.css";

function App() {
  const [recap, setRecap] = useState();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const divRef = useRef(null);

  const URL =
    "https://urxbdkupvxmm4uroj7ku37ygnq0qqkdf.lambda-url.us-east-1.on.aws/";

  const handleCaptureScreenshot = () => {
    if (divRef.current) {
      html2canvas(divRef.current, {
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

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEnterClick = () => {
    //post request to here  with the body {username: username}
    setLoading(true);
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
          setLoading(false);
          return;
        }
        setRecap(data);
        setLoading(false);
      }).catch((error) => {
        alert("Something went wrong. Please try again later.");
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   setRecap(mockrecap);
  // }, []);

  // useEffect(() => {
  //   fetch('/api/recap')
  //     .then(response => response.json())
  //     .then(data => setRecap(data));
  // }, []);

  return (
    <div>
      {recap ? (
        <div class="justify-center flex my-5 flex-col items-center">
          <div
            ref={divRef}
            className={
              `mx-auto mt-24 mb-4 p-4 border rounded-md` +
              (window.innerWidth < 768 ? "w-10/12" : " w-8/12")
            }
          >
            <h1 class="text-2xl font-bold text-gray-800 rounded-md text-center">
              Your 2023 Recap
            </h1>
            <h2 class="text-lg font-semibold text-gray-700 my-2">
              Top Performing Photos:
            </h2>
            <div class="grid grid-cols-2 gap-x-2">
              <div class="relative col-span-1 rounded-md">
                <img
                  class="object-cover h-full rounded-md"
                  src={recap.top_photos[0].urls.regular}
                  alt={recap.top_photos[0].alt_description}
                />
                {window.innerWidth > 768 && (
                  <div class="absolute top-0 text-center p-2 rounded-md">
                    <span class="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                      {recap.top_photos[0].description}
                    </span>
                  </div>
                )}
                {window.innerWidth > 768 && (
                  <div class="absolute bottom-0 w-full p-2 bg-white-900 rounded-md">
                    <div class="flex items-center justify-around text-gray-300">
                      <span class="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        {recap.top_photos[0].statistics.views.total} 📈
                      </span>
                      <span class="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        {recap.top_photos[0].statistics.downloads.total} 💾
                      </span>
                      <span class="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        {recap.top_photos[0].likes} ❤️
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div class="col-span-1 grid grid-cols-2 gap-2">
                {recap.top_photos.map((photo, index) => {
                  if (index === 0) return;
                  return (
                    <div class="relative col-span-1 rounded-md">
                      {window.innerWidth > 768 && (
                        <div class="absolute top-0 text-center p-2 rounded-md">
                          <span class="text-white text-xs drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            {photo.description}
                          </span>
                        </div>
                      )}
                      <img
                        class="object-cover h-full rounded-md"
                        src={photo.urls.regular}
                        alt={photo.alt_description}
                      />
                      {window.innerWidth > 768 && (
                        <div class="absolute bottom-0 p-2 w-full bg-white-900 rounded-md">
                          <div class="flex items-center justify-around text-gray-100">
                            <span class="text-xs text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                              {photo.statistics.views.total} 📈
                            </span>
                            <span class="text-xs text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                              {photo.statistics.downloads.total} 💾
                            </span>
                            <span class="text-xs text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                              {photo.likes} ❤️
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="mt-8">
              <h2 class="text-lg font-semibold mb-2">Your Upload Summary</h2>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-gray-700">Total Photos Uploaded:</p>
                  <p class="text-xl text-gray-800">{recap.total_photos}</p>
                </div>
                <div>
                  <p class="text-gray-700">Total Views:</p>
                  <p class="text-gray-800">{recap.total_views}</p>
                </div>
                <div>
                  <p class="text-gray-700">Total Downloads:</p>
                  <p class="text-gray-800">{recap.total_downloads}</p>
                </div>
                <div>
                  <p class="text-gray-700">Total Likes:</p>
                  <p class="text-gray-800">{recap.total_likes}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <button
              class="text-white hover:text-gray-700 font-bold py-2 px-4 rounded-md"
              onClick={handleCaptureScreenshot}
              style={{ backgroundColor: "#00E9A3", textAlign: "center"}}
            >
              Download Recap
            </button>
          </div>
        </div>
      ) : (
        <div class="justify-center flex my-5 flex-col items-center">
          <div class="mb-5 text-grey[800] text-xl text-center py-2 fixed w-full top-0">
            Your 2023 Recap
          </div>
          <div className="max-w-md mx-auto mt-20 p-4 bg-gray-200 rounded-md shadow-md">
            <label
              htmlFor="username"
              className="block text-base font-medium text-gray-600 mb-2"
            >
              Username:
            </label>
            <div className="my-1 relative rounded-md shadow-sm">
              <input
                type="text"
                id="username"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 pr-10 sm:text-sm border-b-1 border-gray-300 rounded-md bg-gray-100"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>

            <button
              type="button"
              className="mt-4 py-3 w-full rounded-lg shadow-sm text-center font-medium text-white hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleEnterClick}
              style={{ backgroundColor: "#00E9A3", textAlign: "center"}}
            >
              Get My Recap
            </button>
          </div>
           { loading && <div class="animate-spin rounded-full h-16 w-16 border-t-4 my-20 border-blue-500 border-solid"></div>} 
        </div>
      )}
      <Analytics />
    </div>
  );
}

export default App;
