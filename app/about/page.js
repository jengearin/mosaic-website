import Image from 'next/image';

const headshotUrl = '/images/Headshot.png'; // Assuming your headshot is in public/images/headshot.png

export default function About() {
  return (
    <>
      <main className="p-8 max-w-3xl mx-auto">
        {/* About the Mosaic Project Section */}
        <h1 className="text-3xl font-serif font-extrabold mb-4 text-gray-900">About the Mosaic Project</h1>
        <p className="text-lg text-gray-700 mb-6 text-left leading-relaxed">
          <em>Mosaic</em> is a community storytelling initiative aimed at celebrating and preserving the everyday meaning embedded in the spaces we share.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-left leading-relaxed">
          Through location-based flyers and a simple QR-code upload system, individuals are invited to photograph a meaningful place in their community and share the story behind it. These personal reflections, shaped by memory, emotion, and perspective, come together to form a collective “family scrapbook” that reveals the lived experiences giving a place its heart.
        </p>
        <p className="text-lg text-gray-700 mb-6 text-left leading-relaxed">
          This project fosters connection, engagement, and a shared sense of identity. It honors the voices of all generations and reminds us that personal stories are powerful, worthy of preservation, and essential to understanding who we are as a community.
        </p>

        {/* About Me Section */}
        <h2 className="text-2xl font-serif font-bold mt-10 mb-6 text-gray-900">About Me</h2>

        {/* FLEX CONTAINER FOR HEADSHOT AND ONLY THE FIRST PARAGRAPH */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8"> {/* Adjusted mb here */}
          {/* Headshot Image Container */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src={headshotUrl}
                alt="Jennifer Gearin Photo"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* FIRST About Me Text Paragraph Container */}
          <div className="w-full md:w-2/3">
            <p className="text-lg text-gray-700 text-left leading-relaxed">
              Jennifer Gearin is a student at the University of Connecticut, where she is studying Physics and Linguistics/Psychology. She created <em>Mosaic</em>, an entrepreneurial pilot project supported by the Werth Institute and developed as part of the First-Year Women Werth Innovators cohort.
            </p>
          </div>
        </div>
        {/* END FLEX CONTAINER */}

        {/* These two paragraphs are now OUTSIDE the flex container,
            so they will appear below the image and first paragraph */}
        <p className="text-lg text-gray-700 mb-4 text-left leading-relaxed">
          Though Connecticut has found a place in her heart, Jennifer calls Merritt Island, Florida, home. Growing up in Brevard County, many of her most meaningful memories are rooted in the area’s parks, neighborhoods, and coastlines. This landscape shaped who she is and the way she sees the world.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-left leading-relaxed">
          Jennifer started <em>Mosaic</em> because she cares deeply about the stories people carry. She believes that the meaning we find in location is personal and powerful, and she wanted to create a space where people could share these stories in a way that fosters connection, reflection, and a deeper understanding of community. Her work is driven by a love of creativity, compassionate connection, and spaces that invite people to be heard.
        </p>
        <p className="text-lg text-gray-700 text-left leading-relaxed">
         When she isn’t working on <em>Mosaic</em>, Jennifer can often be found figure skating, painting, sitting on the beach, or stargazing.
        </p>
      </main>
    </>
  );
}