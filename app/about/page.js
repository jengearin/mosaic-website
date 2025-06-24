export default function About() {
  return (
    <>
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-serif font-extrabold mb-4">About the Mosaic Project</h1>
        <p className="text-lg text-gray-700 mb-6 text-left">
          <em>Mosaic</em> is a community storytelling initiative aimed at celebrating and preserving the everyday meaning embedded in the spaces we share.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-left">
          Through location-based flyers and a simple QR-code upload system, individuals are invited to photograph a meaningful place in their community and share the story behind it. These personal reflections, shaped by memory, emotion, and perspective, come together to form a collective “family scrapbook” that reveals the lived experiences giving a place its heart.
        </p>
        <p className="text-lg text-gray-700 mb-6 text-left">
          This project fosters connection, engagement, and a shared sense of identity. It honors the voices of all generations and reminds us that personal stories are powerful, worthy of preservation, and essential to understanding who we are as a community.
        </p>

        <h2 className="text-2xl font-serif font-bold mt-10 mb-4">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div>
            <p className="text-lg text-gray-700 mb-4 text-left">
              Hi! I’m Jennifer Gearin, a student at the University of Connecticut studying Physics and Psychology. I grew up in Brevard County, Florida, and many of my favorite memories are rooted in its parks, neighborhoods, and coastlines. This community shaped who I am and how I see the world.
            </p>
            <p className="text-lg text-gray-700 mb-4 text-left">
            I started <em>Mosaic</em> because I care deeply about the stories people carry. I believe that the meaning we find in place is personal and powerful, and I wanted to create a space where people could share those stories in a way that feels easy and meaningful. I love anything that brings people together through creativity and reflection.
            </p>
            <p className="text-lg text-gray-700 text-left">
           When I’m not working on projects like this, I’m usually figure skating, painting, or looking up at the stars.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
