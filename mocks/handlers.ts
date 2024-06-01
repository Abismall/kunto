const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const randomDelay = async (min: number, max: number) => {
  const ms = Math.floor(Math.random() * (max - min + 1) + min);
  await delay(ms);
};

const posts = [
{
  imageUrl: "/blog-1.jpg",
  title: "Hengityselimistö",
  description: "Tutustu salaisuuksiin, jotka parantavat hengityselimistösi terveyttä tehokkaiden hengitystekniikoiden ja -harjoitusten avulla.",
  btnText: "Tutustu palveluun"
},
{
  imageUrl: "/blog-1.jpg",
  title: "Tuki- ja liikuntaelimistö",
  description: "Opi vahvistamaan ja suojaamaan tuki- ja liikuntaelimistöäsi kohdennetuilla harjoituksilla ja oikealla asennolla.",
  btnText: "Liity jäseneksi"
},
{
  imageUrl: "/blog-1.jpg",
  title: "Ravinto ja lisäravinteet",
  description: "Hyödynnä ravitsemuksen voimaa asiantuntijavinkkiemme avulla tasapainoisesta ruokavaliosta, superruoista ja ateriasuunnittelusta optimaalisen terveyden saavuttamiseksi.",
  btnText: "Tilaa uutiskirje"
}


];

const faqs = [
  {
    question: "What should I bring to my first session at the SGC gym?",
    answer: "Just bring your standard issue gear, a water bottle, and a towel. Leave the rest to us, and be ready for any off-world surprises!"
  },
  {
    question: "How do I schedule training sessions with the SG team?",
    answer: "You can schedule sessions via the internal SGC scheduling system or directly contact the training officer in charge."
  },
  {
    question: "Do you offer group training sessions for new recruits?",
    answer: "Yes, we offer both private and group training sessions. Group sessions are perfect for SG team coordination exercises."
  }
 
]


export const mockApi = async (url: string) => {
  
  if (url === 'https://mock.api.com/posts') return Response.json(posts)
  if (url === 'https://mock.api.com/faqs') return Response.json(faqs)
  throw new Error('mockApi request failed: unknown url');
};