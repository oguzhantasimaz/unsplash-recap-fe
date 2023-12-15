import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import { Analytics } from "@vercel/analytics/react";
import "./input.css";

function App() {
  const mockRecap = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      total_photos: 100,
      total_views: 3274376,
      total_downloads: 39648,
      total_likes: 414,
      top_photos: [
        {
          id: "ZSzT6gRxEqc",
          slug: "a-view-of-a-bay-and-mountains-at-sunset-ZSzT6gRxEqc",
          created_at: "2023-08-03T10:44:12Z",
          updated_at: "2023-12-13T12:45:49Z",
          width: 6240,
          height: 4160,
          color: "#8ca6f3",
          blur_hash: "LsIrdS9*s,og?dM}t5WCESs,aebb",
          description: "Sleeping Giant",
          alt_description: "a view of a bay and mountains at sunset",
          urls: {
            raw: "https://images.unsplash.com/photo-1691059283474-74660edb314c?ixid=M3w1NDAwNDd8MHwxfGFsbHw0Nnx8fHx8fDJ8fDE3MDI0OTAwMjd8&ixlib=rb-4.0.3",
            full: "https://images.unsplash.com/photo-1691059283474-74660edb314c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw0Nnx8fHx8fDJ8fDE3MDI0OTAwMjd8&ixlib=rb-4.0.3&q=85",
            regular:
              "https://images.unsplash.com/photo-1691059283474-74660edb314c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw0Nnx8fHx8fDJ8fDE3MDI0OTAwMjd8&ixlib=rb-4.0.3&q=80&w=1080",
            small:
              "https://images.unsplash.com/photo-1691059283474-74660edb314c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw0Nnx8fHx8fDJ8fDE3MDI0OTAwMjd8&ixlib=rb-4.0.3&q=80&w=400",
            thumb:
              "https://images.unsplash.com/photo-1691059283474-74660edb314c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw0Nnx8fHx8fDJ8fDE3MDI0OTAwMjd8&ixlib=rb-4.0.3&q=80&w=200",
            small_s3:
              "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1691059283474-74660edb314c",
          },
          links: {
            self: "https://api.unsplash.com/photos/a-view-of-a-bay-and-mountains-at-sunset-ZSzT6gRxEqc",
            html: "https://unsplash.com/photos/a-view-of-a-bay-and-mountains-at-sunset-ZSzT6gRxEqc",
            download:
              "https://unsplash.com/photos/ZSzT6gRxEqc/download?ixid=M3w1NDAwNDd8MHwxfGFsbHw0Nnx8fHx8fDJ8fDE3MDI0OTAwMjd8",
            download_location:
              "https://api.unsplash.com/photos/ZSzT6gRxEqc/download?ixid=M3w1NDAwNDd8MHwxfGFsbHw0Nnx8fHx8fDJ8fDE3MDI0OTAwMjd8",
          },
          likes: 72,
          statistics: {
            downloads: {
              total: 29861,
              historical: {
                change: 2,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 2,
                  },
                ],
              },
            },
            views: {
              total: 449716,
              historical: {
                change: 348,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 348,
                  },
                ],
              },
            },
            likes: {
              total: 0,
              historical: {
                change: 0,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 0,
                  },
                ],
              },
            },
          },
        },
        {
          id: "-aVTJgDuYZ4",
          slug: "a-foggy-bridge-with-a-few-cars-on-it--aVTJgDuYZ4",
          created_at: "2023-01-21T22:57:38Z",
          updated_at: "2023-12-13T11:43:35Z",
          width: 5732,
          height: 3822,
          color: "#c0c0d9",
          blur_hash: "L#H2ycoeR*t7_4j@WBofWAWBayay",
          description: "suspension bridge h",
          alt_description: "a foggy bridge with a few cars on it",
          urls: {
            raw: "https://images.unsplash.com/photo-1674341554836-45166b2e6b23?ixid=M3w1NDAwNDd8MHwxfGFsbHw5NXx8fHx8fDJ8fDE3MDI0OTAwMjh8&ixlib=rb-4.0.3",
            full: "https://images.unsplash.com/photo-1674341554836-45166b2e6b23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw5NXx8fHx8fDJ8fDE3MDI0OTAwMjh8&ixlib=rb-4.0.3&q=85",
            regular:
              "https://images.unsplash.com/photo-1674341554836-45166b2e6b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw5NXx8fHx8fDJ8fDE3MDI0OTAwMjh8&ixlib=rb-4.0.3&q=80&w=1080",
            small:
              "https://images.unsplash.com/photo-1674341554836-45166b2e6b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw5NXx8fHx8fDJ8fDE3MDI0OTAwMjh8&ixlib=rb-4.0.3&q=80&w=400",
            thumb:
              "https://images.unsplash.com/photo-1674341554836-45166b2e6b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw5NXx8fHx8fDJ8fDE3MDI0OTAwMjh8&ixlib=rb-4.0.3&q=80&w=200",
            small_s3:
              "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1674341554836-45166b2e6b23",
          },
          links: {
            self: "https://api.unsplash.com/photos/a-foggy-bridge-with-a-few-cars-on-it--aVTJgDuYZ4",
            html: "https://unsplash.com/photos/a-foggy-bridge-with-a-few-cars-on-it--aVTJgDuYZ4",
            download:
              "https://unsplash.com/photos/-aVTJgDuYZ4/download?ixid=M3w1NDAwNDd8MHwxfGFsbHw5NXx8fHx8fDJ8fDE3MDI0OTAwMjh8",
            download_location:
              "https://api.unsplash.com/photos/-aVTJgDuYZ4/download?ixid=M3w1NDAwNDd8MHwxfGFsbHw5NXx8fHx8fDJ8fDE3MDI0OTAwMjh8",
          },
          likes: 69,
          statistics: {
            downloads: {
              total: 2546,
              historical: {
                change: 0,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 0,
                  },
                ],
              },
            },
            views: {
              total: 329839,
              historical: {
                change: 39,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 39,
                  },
                ],
              },
            },
            likes: {
              total: 0,
              historical: {
                change: 0,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 0,
                  },
                ],
              },
            },
          },
        },
        {
          id: "QTCudCrW4aI",
          slug: "a-very-tall-building-with-a-clock-on-its-side-QTCudCrW4aI",
          created_at: "2023-01-17T13:12:18Z",
          updated_at: "2023-12-13T13:41:33Z",
          width: 3024,
          height: 4032,
          color: "#260c0c",
          blur_hash: "LQBopf9^niIp0h$%a|xZs.oJofay",
          description: "queens walk",
          alt_description: "a very tall building with a clock on it's side",
          urls: {
            raw: "https://images.unsplash.com/photo-1673961052641-5afae538bf58?ixid=M3w1NDAwNDd8MHwxfGFsbHwxMDB8fHx8fHwyfHwxNzAyNDkwMDI4fA&ixlib=rb-4.0.3",
            full: "https://images.unsplash.com/photo-1673961052641-5afae538bf58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHwxMDB8fHx8fHwyfHwxNzAyNDkwMDI4fA&ixlib=rb-4.0.3&q=85",
            regular:
              "https://images.unsplash.com/photo-1673961052641-5afae538bf58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHwxMDB8fHx8fHwyfHwxNzAyNDkwMDI4fA&ixlib=rb-4.0.3&q=80&w=1080",
            small:
              "https://images.unsplash.com/photo-1673961052641-5afae538bf58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHwxMDB8fHx8fHwyfHwxNzAyNDkwMDI4fA&ixlib=rb-4.0.3&q=80&w=400",
            thumb:
              "https://images.unsplash.com/photo-1673961052641-5afae538bf58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHwxMDB8fHx8fHwyfHwxNzAyNDkwMDI4fA&ixlib=rb-4.0.3&q=80&w=200",
            small_s3:
              "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1673961052641-5afae538bf58",
          },
          links: {
            self: "https://api.unsplash.com/photos/a-very-tall-building-with-a-clock-on-its-side-QTCudCrW4aI",
            html: "https://unsplash.com/photos/a-very-tall-building-with-a-clock-on-its-side-QTCudCrW4aI",
            download:
              "https://unsplash.com/photos/QTCudCrW4aI/download?ixid=M3w1NDAwNDd8MHwxfGFsbHwxMDB8fHx8fHwyfHwxNzAyNDkwMDI4fA",
            download_location:
              "https://api.unsplash.com/photos/QTCudCrW4aI/download?ixid=M3w1NDAwNDd8MHwxfGFsbHwxMDB8fHx8fHwyfHwxNzAyNDkwMDI4fA",
          },
          likes: 67,
          statistics: {
            downloads: {
              total: 1839,
              historical: {
                change: 2,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 2,
                  },
                ],
              },
            },
            views: {
              total: 1060280,
              historical: {
                change: 165,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 165,
                  },
                ],
              },
            },
            likes: {
              total: 0,
              historical: {
                change: 0,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 0,
                  },
                ],
              },
            },
          },
        },
        {
          id: "lJ2EZSbV_P4",
          slug: "lJ2EZSbV_P4",
          created_at: "2023-03-15T15:39:52Z",
          updated_at: "2023-12-13T16:42:27Z",
          width: 3024,
          height: 4032,
          color: "#f3f3f3",
          blur_hash: "LpM%4V%$%gs-?wtSt8aexuROV@WA",
          description: "odunpazari",
          alt_description: "",
          urls: {
            raw: "https://images.unsplash.com/photo-1678894739266-da90649fff92?ixid=M3w1NDAwNDd8MHwxfGFsbHw4MHx8fHx8fDJ8fDE3MDI0OTAwMjh8&ixlib=rb-4.0.3",
            full: "https://images.unsplash.com/photo-1678894739266-da90649fff92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw4MHx8fHx8fDJ8fDE3MDI0OTAwMjh8&ixlib=rb-4.0.3&q=85",
            regular:
              "https://images.unsplash.com/photo-1678894739266-da90649fff92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw4MHx8fHx8fDJ8fDE3MDI0OTAwMjh8&ixlib=rb-4.0.3&q=80&w=1080",
            small:
              "https://images.unsplash.com/photo-1678894739266-da90649fff92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw4MHx8fHx8fDJ8fDE3MDI0OTAwMjh8&ixlib=rb-4.0.3&q=80&w=400",
            thumb:
              "https://images.unsplash.com/photo-1678894739266-da90649fff92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw4MHx8fHx8fDJ8fDE3MDI0OTAwMjh8&ixlib=rb-4.0.3&q=80&w=200",
            small_s3:
              "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1678894739266-da90649fff92",
          },
          links: {
            self: "https://api.unsplash.com/photos/lJ2EZSbV_P4",
            html: "https://unsplash.com/photos/lJ2EZSbV_P4",
            download:
              "https://unsplash.com/photos/lJ2EZSbV_P4/download?ixid=M3w1NDAwNDd8MHwxfGFsbHw4MHx8fHx8fDJ8fDE3MDI0OTAwMjh8",
            download_location:
              "https://api.unsplash.com/photos/lJ2EZSbV_P4/download?ixid=M3w1NDAwNDd8MHwxfGFsbHw4MHx8fHx8fDJ8fDE3MDI0OTAwMjh8",
          },
          likes: 56,
          statistics: {
            downloads: {
              total: 1385,
              historical: {
                change: 0,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 0,
                  },
                ],
              },
            },
            views: {
              total: 931087,
              historical: {
                change: 79,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 79,
                  },
                ],
              },
            },
            likes: {
              total: 0,
              historical: {
                change: 0,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 0,
                  },
                ],
              },
            },
          },
        },
        {
          id: "r2Uk2g31JiE",
          slug: "a-cat-sitting-on-top-of-a-large-rock-r2Uk2g31JiE",
          created_at: "2023-08-03T10:44:12Z",
          updated_at: "2023-12-13T13:46:32Z",
          width: 5612,
          height: 3741,
          color: "#f3d9c0",
          blur_hash: "LgIXy~58M{of~qEMniWB9us,o2ax",
          description: "chillin",
          alt_description: "a cat sitting on top of a large rock",
          urls: {
            raw: "https://images.unsplash.com/photo-1691059283093-1e4345a9fa71?ixid=M3w1NDAwNDd8MHwxfGFsbHw0NXx8fHx8fDJ8fDE3MDI0OTAwMjd8&ixlib=rb-4.0.3",
            full: "https://images.unsplash.com/photo-1691059283093-1e4345a9fa71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw0NXx8fHx8fDJ8fDE3MDI0OTAwMjd8&ixlib=rb-4.0.3&q=85",
            regular:
              "https://images.unsplash.com/photo-1691059283093-1e4345a9fa71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw0NXx8fHx8fDJ8fDE3MDI0OTAwMjd8&ixlib=rb-4.0.3&q=80&w=1080",
            small:
              "https://images.unsplash.com/photo-1691059283093-1e4345a9fa71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw0NXx8fHx8fDJ8fDE3MDI0OTAwMjd8&ixlib=rb-4.0.3&q=80&w=400",
            thumb:
              "https://images.unsplash.com/photo-1691059283093-1e4345a9fa71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDAwNDd8MHwxfGFsbHw0NXx8fHx8fDJ8fDE3MDI0OTAwMjd8&ixlib=rb-4.0.3&q=80&w=200",
            small_s3:
              "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1691059283093-1e4345a9fa71",
          },
          links: {
            self: "https://api.unsplash.com/photos/a-cat-sitting-on-top-of-a-large-rock-r2Uk2g31JiE",
            html: "https://unsplash.com/photos/a-cat-sitting-on-top-of-a-large-rock-r2Uk2g31JiE",
            download:
              "https://unsplash.com/photos/r2Uk2g31JiE/download?ixid=M3w1NDAwNDd8MHwxfGFsbHw0NXx8fHx8fDJ8fDE3MDI0OTAwMjd8",
            download_location:
              "https://api.unsplash.com/photos/r2Uk2g31JiE/download?ixid=M3w1NDAwNDd8MHwxfGFsbHw0NXx8fHx8fDJ8fDE3MDI0OTAwMjd8",
          },
          likes: 41,
          statistics: {
            downloads: {
              total: 823,
              historical: {
                change: 2,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 2,
                  },
                ],
              },
            },
            views: {
              total: 71452,
              historical: {
                change: 47,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 47,
                  },
                ],
              },
            },
            likes: {
              total: 0,
              historical: {
                change: 0,
                resolution: "days",
                quantity: 1,
                values: [
                  {
                    date: "2023-12-12",
                    value: 0,
                  },
                ],
              },
            },
          },
        },
      ],
    },
  };

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
        setRecap(data);
        setLoading(false);
      }).catch((error) => {
        alert("Enter a valid username");
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
