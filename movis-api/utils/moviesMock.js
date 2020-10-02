const moviesMock = [
  {
    "id": "8bc3ca7e-6617-43ba-b0cc-56af25a5aa98",
    "title": "Housemaid, The (Hanyo)",
    "year": 2000,
    "cover": "http://dummyimage.com/216x160.png/dddddd/000000",
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "duration": 1962,
    "contentRating": "PG",
    "source": "https://gnu.org/luctus/cum.png",
    "tags": ["Horror"]
  },
  {
    "id": "01e6329c-dff8-4671-9c18-3fc944ac2975",
    "title": "Shockproof",
    "year": 1975,
    "cover": "http://dummyimage.com/223x117.jpg/cc0000/ffffff",
    "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "duration": 204,
    "contentRating": "PG",
    "source": "http://cafepress.com/in/hac/habitasse.png",
    "tags": ["Comedy|Drama", "Documentary", "Horror|Mystery|Thriller"]
  },
  {
    "id": "011fc4f0-0f51-45b7-b8f3-d5e8856b9466",
    "title": "Slight Case of Murder, A",
    "year": 1995,
    "cover": "http://dummyimage.com/147x167.jpg/ff4444/ffffff",
    "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "duration": 1908,
    "contentRating": "PG",
    "source": "https://nih.gov/fusce/consequat/nulla/nisl/nunc/nisl/duis.js",
    "tags": ["Drama", "Drama", "Drama|Romance"]
  },
  {
    "id": "5544d3c2-3fb4-49a5-b5b7-29e060d00feb",
    "title": "Once Upon a Time in China (Wong Fei Hung)",
    "year": 2013,
    "cover": "http://dummyimage.com/169x232.bmp/cc0000/ffffff",
    "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "duration": 1961,
    "contentRating": "G",
    "source": "https://symantec.com/at/nibh/in/hac/habitasse.json",
    "tags": [
      "Animation|Children|Musical",
      "Comedy",
      "Comedy",
      "Comedy|Drama|Romance"
    ]
  },
  {
    "id": "6c957a71-a4ce-4946-bcc9-c0a2feef545e",
    "title": "Spark: A Burning Man Story",
    "year": 1994,
    "cover": "http://dummyimage.com/184x224.bmp/ff4444/ffffff",
    "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "duration": 1960,
    "contentRating": "NC-17",
    "source": "https://techcrunch.com/libero.png",
    "tags": ["Adventure|Comedy|Romance", "Comedy|Drama"]
  },
  {
    "id": "bf0f19d0-5e47-4a7e-92e0-b0bc4f3f68d5",
    "title": "Woman's Face, A (En kvinnas ansikte) ",
    "year": 2012,
    "cover": "http://dummyimage.com/177x220.jpg/5fa2dd/ffffff",
    "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "duration": 2060,
    "contentRating": "R",
    "source": "https://t-online.de/parturient/montes/nascetur/ridiculus/mus.json",
    "tags": ["Horror", "Comedy", "Drama"]
  },
  {
    "id": "ca2a5c01-ac4e-4fc4-935e-e4b8c424e7c6",
    "title": "Phantom Carriage, The (Körkarlen)",
    "year": 2005,
    "cover": "http://dummyimage.com/146x204.bmp/ff4444/ffffff",
    "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "duration": 1917,
    "contentRating": "NC-17",
    "source": "https://sun.com/ut/massa/quis/augue/luctus/tincidunt.png",
    "tags": ["Horror|Thriller", "Action|Comedy|Thriller", "Comedy"]
  },
  {
    "id": "7b144383-1be9-412b-8b10-38b050dfc023",
    "title": "Winter of Discontent",
    "year": 2004,
    "cover": "http://dummyimage.com/222x230.bmp/ff4444/ffffff",
    "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "duration": 2057,
    "contentRating": "PG",
    "source": "http://pagesperso-orange.fr/commodo/vulputate.aspx",
    "tags": ["Drama", "Comedy", "Crime|Mystery|Thriller"]
  },
  {
    "id": "48b3675c-7018-4b06-99b1-fd6391d9ef2d",
    "title": "Al Capone",
    "year": 2003,
    "cover": "http://dummyimage.com/113x129.jpg/cc0000/ffffff",
    "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "duration": 2051,
    "contentRating": "NC-17",
    "source": "https://salon.com/cursus/vestibulum/proin/eu/mi.jsp",
    "tags": [
      "Documentary",
      "Action|Drama",
      "Comedy|Drama|Romance",
      "Drama|War",
      "Drama"
    ]
  },
  {
    "id": "0acba459-884d-44f2-8827-cf912bf49bb8",
    "title": "Micmacs (Micmacs à tire-larigot)",
    "year": 2011,
    "cover": "http://dummyimage.com/109x100.bmp/ff4444/ffffff",
    "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "duration": 1984,
    "contentRating": "R",
    "source": "https://biglobe.ne.jp/sem/praesent/id/massa.json",
    "tags": ["Drama|Thriller", "Horror", "Drama", "Drama", "Comedy|Romance"]
  }
]

module.exports = {
  moviesMock
}