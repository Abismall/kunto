import Hero from '@components/ui/hero';
import ServiceDisplay from '@components/services/service-display';
import SocialMediaFeed, { SocialMediaPost } from '@components/social-media-feed';

export default async function Page() {
  const suggestions = [
    {
      serviceTitle: "Hengitysvalmennus",
      description: "Tutustu salaisuuksiin, jotka parantavat hengityselimistösi terveyttä tehokkaiden hengitystekniikoiden ja -harjoitusten avulla.",
      imageUrl: "/services/hengitysvalmennus.jpg",
      linkTitle: "Lue lisää",
      href: "/service/hengitysvalmennus"
    },

    {
      serviceTitle: "Liikuntaneuvonta",
      description: "Opi vahvistamaan ja suojaamaan tuki- ja liikuntaelimistöäsi kohdennetuilla harjoituksilla ja oikealla asennolla.",
      imageUrl: "/services/liikuntaneuvonta.jpg",
      linkTitle: "Lue lisää",
      href: "/service/liikuntaneuvonta"
    },
    {
      serviceTitle: "Ruokavalio-ohjaus",
      description: "Hyödynnä ravitsemuksen voimaa asiantuntijavinkkiemme avulla tasapainoisesta ruokavaliosta, superruoista ja ateriasuunnittelusta optimaalisen terveyden saavuttamiseksi.",
      imageUrl: "/services/ruokavalio-ohjaus.jpg",
      linkTitle: "Lue lisää",
      href: "/service/ruokavalio-ohjaus"
    }

  ];
  const socialMediaPosts: SocialMediaPost[] = [
    {
      id: 1,
      platform: 'facebook',
      title: 'The lore of lorem ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in urna et ligula cursus viverra. Nulla facilisi. Sed fermentum ex quis tempor facilisis. Aliquam erat volutpat. Integer pharetra, lorem eu feugiat vulputate, turpis felis vehicula lacus, nec laoreet massa magna in magna. Mauris tincidunt lorem sit amet ligula volutpat, vel fermentum arcu laoreet. Nam bibendum lacus et justo malesuada dapibus. Cras et ligula ut nisi cursus ullamcorper. Curabitur vel ultricies ex. Vestibulum consectetur, urna a posuere cursus, odio velit convallis mauris, eget varius felis sapien sed nisl. Morbi nec leo non lectus sollicitudin gravida. Sed euismod orci sed nulla facilisis, id viverra urna lacinia.',
      timestamp: '2023-06-01',
      link: 'https://www.facebook.com/yourpage',
      user: 'John Doe',
      userPicture: '/profile-1.png',
    },
    {
      id: 2,
      platform: 'instagram',
      title: 'Channeling your inner priest',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
      timestamp: '2023-06-01',
      link: 'https://www.instagram.com/yourprofile',
      user: 'Jane Smith',
      userPicture: '/profile-2.png',
    },
    {
      id: 3,
      platform: 'instagram',
      title: 'Praise the sun',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      timestamp: '2023-06-02',
      link: 'https://www.instagram.com/yourprofile',
      user: 'Mike Johnson',
      userPicture: '/profile-1.png',
    },
    {
      id: 4,
      platform: 'instagram',
      title: 'Consequences of pleasure',
      content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
      timestamp: '2023-06-03',
      link: 'https://www.instagram.com/yourprofile',
      user: 'Anna Williams',
      userPicture: '/profile-2.png',
    }
  ];


  return (
    <>
      <Hero />
     <section id="services" className="service-section">
    {suggestions && suggestions.length > 0 && suggestions.map((service, index) => (
      <ServiceDisplay
        key={`${service}-${index}`}
        service={service}
      />
    ))}
</section>
      <h2 className='flex justify-center mt-6 text-dark'>Löydät meidät myös sosiaalisesta mediasta</h2>
      <div className="flex justify-center space-x-4 mb-6">
        <a href="#" className="text-sm text-secondary hover:text-highlight transition duration-300 ease-in-out transform hover:scale-105">Facebook</a>
        <a href="#" className="text-sm text-secondary hover:text-highlight transition duration-300 ease-in-out transform hover:scale-105">Twitter</a>
        <a href="#" className="text-sm text-secondary hover:text-highlight transition duration-300 ease-in-out transform hover:scale-105">Instagram</a>
      </div>
      <SocialMediaFeed posts={socialMediaPosts} />
    </>
  );
};