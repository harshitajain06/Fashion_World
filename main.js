const activeMenu = document.getElementById('active-menu');
const hamMenu = document.getElementById('hamburger-menu');
const closeMenu = document.getElementById('close-menu');
const hideAll = document.querySelectorAll('section');

activeMenu.addEventListener('click', () => {
  hamMenu.style.display = 'flex';
  hideAll.forEach((i) => { i.style.display = 'none'; });
});

closeMenu.addEventListener('click', () => {
  hamMenu.style.display = 'none';
  hideAll.forEach((i) => { i.style.display = 'block'; });
});

hamMenu.addEventListener('click', () => {
  hamMenu.style.display = 'none';
  hideAll.forEach((i) => { i.style.display = 'block'; });
});

const speakers = [
  {
    image: './speakers/Betsey-Johnson-Fashion-Designer-1.jpg',
    name: 'Betsey-Johnson',
    status: 'She is famous for her feminine and whimsical designs.',
    work: 'She truly holds a deep knowledge of costumes. Her name was also mentioned in the “Fashion Walk of Fame” back in 2002 and right after that she expanded her business.',
  },
  {
    image: './speakers/Marc-Jacobs-Fashion-Designer1.jpg',
    name: 'Marc Jacobs',
    status: 'Jacobs belongs to a Jewish family and is the head designer.',
    work: 'While he was studying at the Parson College of Design, he sold out his first ever stack of knit sweaters and with in no time he became the first of celebrities. ',
  },
  {
    image: './speakers/Giorgio-Armani1.jpg',
    name: ' Kate Spade',
    status: 'She is the co-founder of the brand “Kate Spade New York,”',
    work: ' She holds a graduate degree in journalism from Arizona State University. She is widely known for her designer handbags and is considered to be one of the best bags around.',
  },
  {
    image: './speakers/Ralph-Lauren2.jpg',
    name: 'Ralph Lauren',
    status: 'Ralph Lauren is widely known for his excellent designing.',
    work: ' In 1972, he earned his fame when he introduced a notable short sleeve shirt with the Polo logo on it. He is definitely one of the best designers around.',
  },
  {
    image: './speakers/Coco-Chanel.jpg',
    name: ' Coco Chanel',
    status: 'Coco Chanel was famous for her famous brand ‘Chanel.’',
    work: 'She is definitely a leading figure in the fashion industry. Up till now, she is the only single fashion designer to be named on the most important people.',
  },
  {
    image: './speakers/Donatella-Versace1.jpg',
    name: 'Giorgio Armani',
    status: ' Armani is also the first ever designer to ban models.',
    work: 'Giorgio Armani is known to be the only designer who changed the trend of fashion industry after creating the brand “Armani” back in 1975. ',
  },
];
let speakersOpen1 = '';

speakers.forEach((speaker) => {
  speakersOpen1
                += `
            <div class=" sData flex gap-6">
                    <div>
                        <img class="w-[220px] h-[100px]" src="${speaker.image}"/>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h4 class="text-xl font-[800]">${speaker.name}</h4>
                        <h6 class="text-sm text-[#ec5242]">${speaker.status}</h6>
                        <hr class="w-12 bg-[#d3d3d3] h-[4px]">
                        <h5 class="text-sm text-[#8c8c8c]">${speaker.work}</h5>
                    </div>
                </div>

            `;
});

const speakersOpen = document.querySelector('#speakers');
speakersOpen.innerHTML = speakersOpen1;

const moreBtn = document.querySelector('#more');
const LessBtn = document.querySelector('#less');
const card3 = document.querySelector('.sData:nth-child(3)');
const card4 = document.querySelector('.sData:nth-child(4)');
const card5 = document.querySelector('.sData:nth-child(5)');
const card6 = document.querySelector('.sData:nth-child(6)');

function hide(i) {
  if (i.matches) {
    moreBtn.style.display = 'none';
    LessBtn.style.display = 'none';
    card3.style.display = 'flex';
    card4.style.display = 'flex';
    card5.style.display = 'flex';
    card6.style.display = 'flex';
  } else {
    moreBtn.style.display = 'flex';
    LessBtn.style.display = 'none';
    card3.style.display = 'none';
    card4.style.display = 'none';
    card5.style.display = 'none';
    card6.style.display = 'none';
    moreBtn.addEventListener('click', () => {
      card3.style.display = 'flex';
      card4.style.display = 'flex';
      card5.style.display = 'flex';
      card6.style.display = 'flex';
      moreBtn.style.display = 'none';
      LessBtn.style.display = 'flex';
    });

    LessBtn.addEventListener('click', () => {
      card3.style.display = 'none';
      card4.style.display = 'none';
      card5.style.display = 'none';
      card6.style.display = 'none';
      moreBtn.style.display = 'flex';
      LessBtn.style.display = 'none';
    });
  }
}

const i = window.matchMedia('(min-width:768px)');
hide(i);
i.addListener(hide);
