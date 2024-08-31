

document.addEventListener('DOMContentLoaded', function() {
  const mainImg = document.getElementById('MainImg');
  const smallImgs = document.querySelectorAll('.small-img');
  const bookTitle = document.querySelector('.single-pro-details h1');
  const authorName = document.querySelector('.single-pro-details h2:nth-of-type(1)');
  const bookPrice = document.querySelector('.single-pro-details h2:nth-of-type(2)');
  const bookDescription = document.querySelector('.single-pro-details span');

  const bookData = [
      {
          imgSrc: 'https://img.bookchor.com/images/cover/681/9781782395966.jpg',
          title: 'Troll',
          author: 'Author D.B. Thorne',
          price: '$100.00',
          description: 'Years ago, Fortune gave up on his daughter, Sophie, after a troubled adolescence. Now shes gone missing, vanished without trace. And after weeks of investigation, the police have given up on her, too. Driven by guilt, and a determination to atone for his failures as a father, he takes on the search himself. He soon finds that his daughter had been living in fear of a vicious online troll who seemed to know far too much about her. Could Sophies disappearance be linked to this unknown predator Fortune is about to discover that monsters which live online dont always stay there...',
      },
      {
          imgSrc: 'https://img.bookchor.com/images/cover/691/9780241303771.jpg',
          title: 'The Sapphire Widow',
          author: ' Dinah Jefferies',
          price: '$120.00',
          description: 'The Sapphire Widow A Richard & Judy Book Club Pick 2018A Top 10 Sunday Times BestsellerA sweeping, breath-taking story of love and betrayal from the Number One Sunday Times bestselling author of The Tea Planters WifeCeylon, 1935. Louisa Reeve, the daughter of a successful British gem trader, and her husband Elliot, a charming, thrill-seeking businessman, seem like the couple who have it all. Except what they long for more than anything: a child y absent, spending much of his time at a nearby cinnamon plantation, overlooking the Indian ocean. After his sudden death, Louisa is left alone to solve the mystery he left behind. Revisiting the plantation at Cinnamon Hills, she finds herself unexpectedly drawn towards the owner Leo, a rugged outdoors man with a chequered past.'
      },
      {
          imgSrc: 'https://img.bookchor.com/images/cover/668/9781471135903.jpg',
          title: 'Daughters of Castle Deverill Deverill ',
          author: 'Author Santa Montefiore',
          price: '$150.00',
          description: 'Daughters of Castle Deverill Deverill #2 It is 1925 and the war is long over. But much has been lost and life will never truly be the same again.Castle Deverill, cherished home to the Deverill family in the west of Ireland for hundreds of years, has burned to the ground. But young and flighty Celia Deverill is determined to restore the sad ruin to its former glory. '
      },
      {
          imgSrc: 'https://img.bookchor.com/images/cover/569/9780747538486.jpg',
          title: 'Harry Potter and the Chamber of Secrets',
          author: 'Author J. K. Rowling',
          price: '$180.00',
          description: 'Harry Potter and the Chamber of SecretsEver since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as hes packing his bags, Harry receives a warning from a strange, impish creature who says that if Harry returns to Hogwarts, disaster will strike. And strike it does. For in Harry Ever since Harry Potter had come home for the summer, '
      }
  ];

  smallImgs.forEach((img, index) => {
      img.addEventListener('click', function() {
          const data = bookData[index];
          mainImg.src = data.imgSrc;
          bookTitle.textContent = data.title;
          authorName.textContent = data.author;
          bookPrice.textContent = data.price;
          bookDescription.textContent = data.description;
      });
  });
});



