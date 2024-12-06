import Image from "next/image";
import Head from "next/head";
import { Anton, Rubik_Glitch, Rubik_Vinyl } from "next/font/google";
import Button from "@/components/Button";
import FullScreenImageGallery from "@/components/Images";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});
const rubik_glitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});
const rubik_vinyl = Rubik_Vinyl({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-[#d9d9d9]">
        <Head>
          <title>Magic By luis</title>
        </Head>
        <div className="flex flex-col min-h-screen">
          <div className="flex justify-end p-4">
            <Button onClick={() => {}}>Contact</Button>
          </div>
          <div className="flex flex-col flex-grow">
            <div
              className={`flex flex-grow ${anton.className} flex items-center justify-center text-[30vw] leading-none font-bold text-[#2b2b2b]`}
            >
              <p className="h-full flex items-center justify-center m-0 p-0 leading-none">
                LU{" "}
                <span className="relative inline-block">
                  <Image
                    src="/luis_i.png"
                    alt="photo"
                    className="inline-block"
                    height={200} // Optional: Set the height (this is overridden by 'h-full')
                    width={200} // Optional: Set the width
                    layout="intrinsic" // Keeps the aspect ratio of the image
                  />
                </span>{" "}
                S
              </p>
            </div>

            <div className="flex justify-center">
              <p
                className={`${rubik_glitch.className} text-[10vw] text-black m-0 p-0`}
                style={{
                  textShadow:
                    "0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 0, 0, 0.4)",
                  lineHeight: "1", // Ensures no extra space between lines
                }}
              >
                SHRESTHA
              </p>
            </div>
            <div className="mb-8 flex justify-center">
              <p
                style={{
                  textShadow:
                    "0 0 10px rgba(0 ,74, 173, 0.8), 0 0 20px rgba(0 ,74 ,173, 0.6), 0 0 30px rgba(0 ,74 ,173, 0.4)",
                  lineHeight: "1", // Ensures no extra space between lines
                }}
                className={`${rubik_vinyl.className} text-[5vw] text-[#004aad] m-0 p-0`}
              >
                SLEIGHT OF HAND ARTIST
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* new page ............................................................................................................ */}
      <div className="w-full bg-[#2b2b2b] min-h-screen">
        <p
          className="text-white text-center px-4 py-4  mx-auto"
          style={{
            fontFamily: "Chap-Regular",
            fontWeight: 500,
            fontSize: "2rem", // Make the text larger, adjust as needed
            lineHeight: "1.4", // Adjust line height for better readability
            display: "-webkit-box", // Flexbox style to manage the lines
            WebkitBoxOrient: "vertical", // Ensure it's oriented vertically
            textAlign: "center", // Center text alignment
          }}
        >
          Luis's signature style blends masterful sleight of hand, magic,
          mentalism, improv comedy, and dynamic audience interaction into a
          captivating theatrical experience. His performances are unpredictable,
          funny, and packed with hard-hitting moments.
        </p>
        <div
          className="flex"
        >
          {/* Image Gallery Section */}
          <div className="w-full bg-[#2b2b2b] py-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
              {/* Top row of images */}
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="relative h-60">
                  <Image
                    src={`/photos/image_${idx + 1}.jpg`} // Update with your image names
                    alt={`Gallery image ${idx + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* Bottom row of images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4 mt-8">
              {[...Array(5)].map((_, idx) => (
                <div key={idx + 5} className="relative h-60">
                  <Image
                    src={`/photos/image_${idx + 6}.jpg`} // Update with your image names
                    alt={`Gallery image ${idx + 6}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
          <Image
                    src={`/overlay.png`} 
                    alt={`overlay image`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
          </div>
        </div>
      </div>
      <hr className="border border-white" />

      {/* new page ............................................................................................................ */}
      <div className="w-full bg-[#2b2b2b] min-h-screen flex flex-col gap-5">
        <p
          className="text-white text-center px-4 py-4  mx-auto"
          style={{
            fontFamily: "Chap-Regular",
            fontWeight: 500,
            fontSize: "2rem", // Make the text larger, adjust as needed
            lineHeight: "1.4", // Adjust line height for better readability
            display: "-webkit-box", // Flexbox style to manage the lines
            WebkitBoxOrient: "vertical", // Ensure it's oriented vertically
            textAlign: "center", // Center text alignment
          }}
        >
          Luis's signature style blends masterful sleight of hand, magic,
          mentalism, improv comedy, and dynamic audience interaction into a
          captivating theatrical experience. His performances are
          unpredictable,funny and packed with hard hitting moments.
        </p>

        <div className="w-full bg-[#2b2b2b] py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
            {/* Top row of images */}
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="relative h-60">
                <Image
                  src={`/image_${idx + 1}.jpg`} // Update with your image names
                  alt={`Gallery image ${idx + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Bottom row of images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4 mt-8">
            {[...Array(5)].map((_, idx) => (
              <div key={idx + 5} className="relative h-60">
                <Image
                  src={`/image_${idx + 6}.jpg`} // Update with your image names
                  alt={`Gallery image ${idx + 6}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border border-white" />
      {/* new page ............................................................................................................ */}

      <div className="w-full bg-[#2b2b2b] min-h-screen flex ">
        <div className="flex flex-col">
          <p>the performer</p>
          <p>
            My journey started by me writing things that could be performed to
            an audience. In that journey, I stumbled upon magic which I
            instantly fell in love with and knew it is something I wanted to do.
            Since then magic is in my head 24/7 and the deck of cards never
            leaves my hand. Being called the finest sleight of hand artist of
            Nepal and given the responsibility to run Nepali Brotherhood of
            magician(which is the only organization dedicated to magician in
            Nepal) so quickly since I started magic, it gets me excited and also
            makes me feel responsible for the future of magic and live shows in
            Nepal.
          </p>
          <div>video player</div>
        </div>
        <div>overlay image</div>
      </div>
      <hr className="border border-white" />
      {/* new page ............................................................................................................ */}
      <div className="w-full bg-[#2b2b2b] min-h-screen flex flex-col border border-white p-10">
        <div>performances</div>
        <div className="flex">
          <div className="flex flex-col">
            <p>stage show</p>
            <p>
              Luis's platform performances are for groups of 15 to 1,000 and can
              range from 10 to 70 minutes. David’s program is predominantly
              mentalism — mindreading, influence, predictions — magic that
              appeals to the savvy modern audience. His program is highly
              interactive, with countless audience members participating from
              their seat and the stage.
            </p>
          </div>
          <div>
            <p>Image</p>
            <p>Strolling & Close-Up Magic</p>
          </div>
        </div>
      </div>
      <hr className="border border-white" />
      {/* new page ............................................................................................................ */}
      <div className="flex flex-col w-full bg-[#2b2b2b] min-h-screen ">
        <div>form</div>
        <div>socials contacts</div>
      </div>

{/* here only image kept */}
<FullScreenImageGallery/>





    </div>
  );
}
