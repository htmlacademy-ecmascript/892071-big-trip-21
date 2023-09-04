const destinations = [
  {
    id: 1,
    name: 'Amsterdam',
    description: 'Amsterdam is the capital and most populous city of the Netherlands, with The Hague being the seat of government. A few of Amsterdam\'s notable residents throughout its history include painters Rembrandt and Vincent van Gogh, seventeenth-century philosophers Baruch Spinoza, John Locke, René Descartes.',
    pictures: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Westerkerk_Amsterdam.jpg/220px-Westerkerk_Amsterdam.jpg',
        description: 'Amsterdam'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Reguliersgracht%2C_Amsterdam.jpg/132px-Reguliersgracht%2C_Amsterdam.jpg',
        description: 'Amsterdam'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/132px-KeizersgrachtReguliersgrachtAmsterdam.jpg',
        description: 'Amsterdam'
      }
    ]
  },
  {
    id: 2,
    name: 'Paris',
    description: 'Paris is the capital and most populous city of France, located in northern central France, in a north-bending arc of the river Seine whose crest includes two islands, the Île Saint-Louis and the larger Île de la Cité, which form the oldest part of the city',
    pictures: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/278px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
        description: 'Paris'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Louvre_Courtyard%2C_Looking_West.jpg/278px-Louvre_Courtyard%2C_Looking_West.jpg',
        description: 'Paris'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/04-2017._Notre-Dame_de_Paris-71.jpg/80px-04-2017._Notre-Dame_de_Paris-71.jpg',
        description: 'Paris'
      }
    ]
  },
  {
    id: 3,
    name: 'London',
    description: 'London stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea and has been a major settlement for two millennia',
    pictures: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/London_%2844761485915%29.jpg/290px-London_%2844761485915%29.jpg',
        description: 'London'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/278px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg',
        description: 'London'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/278px-London_Skyline_%28125508655%29.jpeg',
        description: 'London'
      }
    ]
  },
  {
    id: 4,
    name: 'Bergeggi',
    description: 'Bergeggi is a comune (municipality) in the Province of Savona in the Italian region Liguria, located about 90 kilometres (56 mi) southwest of Genoa and about 10 kilometres (6 mi) southwest of Savona. In 2007 and 2008 the municipality was awarded the Blue Flag, which distinguishes the high quality of the beaches and the sea.',
    pictures: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bergeggi_beach_2.jpg/220px-Bergeggi_beach_2.jpg',
        description: 'Bergeggi'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bergeggi-IMG_1639.JPG/220px-Bergeggi-IMG_1639.JPG',
        description: 'Bergeggi'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bergeggi-IMG_1635.JPG/220px-Bergeggi-IMG_1635.JPG',
        description: 'Bergeggi'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bergeggi-IMG_1640.JPG/260px-Bergeggi-IMG_1640.JPG',
        description: 'Bergeggi'
      }
    ]
  },
  {
    id: 5,
    name: 'Barcelona',
    description: 'Barcelona is the capital and largest city of the autonomous community of Catalonia. Many of the buildings date from medieval times, some from as far back as the Roman settlement of Barcelona.',
    pictures: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Evening_light_over_Barcelona.jpg/290px-Evening_light_over_Barcelona.jpg',
        description: 'Barcelona'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Torre_Gl%C3%B2ries%2C_Barcelona_%2851351746585%29.jpg/220px-Torre_Gl%C3%B2ries%2C_Barcelona_%2851351746585%29.jpg',
        description: 'Barcelona'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Batllo_House.jpg/200px-Batllo_House.jpg',
        description: 'Barcelona'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Casa_Mil%C3%A0%2C_general_view.jpg/200px-Casa_Mil%C3%A0%2C_general_view.jpg',
        description: 'Barcelona'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/220px-Sagrada_Familia_01.jpg',
        description: 'Barcelona'
      }
    ]
  },
  {
    id: 6,
    name: 'Bonn',
    description: 'Bonn is a federal city in the German state of North Rhine-Westphalia, located on the banks of the Rhine.',
    pictures: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2008-12-25_Bonn_Sterntor.jpg/220px-2008-12-25_Bonn_Sterntor.jpg',
        description: 'Bonn'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Altes_Rathaus_Bonn.jpg/220px-Altes_Rathaus_Bonn.jpg',
        description: 'Bonn'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Villa_Hammerschmidt_Bonn_Seite_Adenauerallee_20080831.jpg/220px-Villa_Hammerschmidt_Bonn_Seite_Adenauerallee_20080831.jpg',
        description: 'Bonn'
      }
    ]
  },
  {
    id: 7,
    name: 'Como',
    description: 'Its proximity to Lake Como and to the Alps has made Como a tourist destination, and the city contains numerous works of art, churches, gardens, museums, theatres, parks, and palaces: the Duomo, seat of the Diocese of Como; the Basilica of Sant\'Abbondio; the Villa Olmo; the public gardens with the Tempio Voltiano; the Teatro Sociale; the Broletto or the city\'s medieval town hall; and the 20th-century Casa del Fascio.',
    pictures: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/250px-Como_and_its_lake.jpg',
        description: 'Como'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/La_citt%C3%A0_di_Como_e_il_suo_lago.jpg/220px-La_citt%C3%A0_di_Como_e_il_suo_lago.jpg',
        description: 'Como'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Comofontanawiki.JPG/250px-Comofontanawiki.JPG',
        description: 'Como'
      }
    ]
  },
  {
    id: 8,
    name: 'Edinburgh ',
    description: '"Edin", the root of the city\'s name, derives from Eidyn, the name for this region in Cumbric, the Brittonic Celtic language formerly spoken there. The name\'s meaning is unknown.[16] The district of Eidyn is centred on the stronghold of Din Eidyn, the dun or hillfort of Eidyn.',
    pictures: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Edinburgh%2C_Scott_Monument_%2837729400005%29.jpg/81px-Edinburgh%2C_Scott_Monument_%2837729400005%29.jpg',
        description: 'Edinburgh '
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/The_Shore%2C_Leith.JPG/220px-The_Shore%2C_Leith.JPG',
        description: 'Edinburgh '
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Edinburgh_New_College_%288594473141%29.jpg/220px-Edinburgh_New_College_%288594473141%29.jpg',
        description: 'Edinburgh '
      }
    ]
  }
];

function getDestinations() {
  return destinations;
}

export { getDestinations };
