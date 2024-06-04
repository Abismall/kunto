const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const randomDelay = async (min: number, max: number) => {
  const ms = Math.floor(Math.random() * (max - min + 1) + min);
  await delay(ms);
};

const suggestions = [
  {
    serviceTitle: "Hengitysvalmennus",
    description: "Tutustu salaisuuksiin, jotka parantavat hengityselimistösi terveyttä tehokkaiden hengitystekniikoiden ja -harjoitusten avulla.",
    imageUrl: "/blog-1.jpg",
    linkTitle: "Tutustu palveluihin",
    href: "/palvelut"
  },

  {
    serviceTitle: "Liikuntaneuvonta",
    description: "Opi vahvistamaan ja suojaamaan tuki- ja liikuntaelimistöäsi kohdennetuilla harjoituksilla ja oikealla asennolla.",
    imageUrl: "/blog-1.jpg",
    linkTitle: "Varaa aika",
    href: "/ajanvaraus"
  },
  {
    serviceTitle: "Ruokavalio-ohjaus",
    description: "Hyödynnä ravitsemuksen voimaa asiantuntijavinkkiemme avulla tasapainoisesta ruokavaliosta, superruoista ja ateriasuunnittelusta optimaalisen terveyden saavuttamiseksi.",
    imageUrl: "/blog-1.jpg",
    linkTitle: "Ota yhteyttä",
    href: "/yhteystiedot"
  }


];


export const mockApi = async (url: string) => {

  if (url === 'https://mock.api.com/suggestions') return Response.json(suggestions)
  throw new Error('mockApi request failed: unknown url');
};