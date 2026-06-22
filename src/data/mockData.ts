import type { AudioContent, CategoryData } from '../types';

// Static imports of local images
import img_mNSOaMNI3Lc from '../assets/images/mNSOaMNI3Lc.jpg';
import img_X0ghHtWoM8s from '../assets/images/X0ghHtWoM8s.jpg';
import img_5jct11kyEn8 from '../assets/images/5jct11kyEn8.jpg';
import img_jCvaLPiSJ9s from '../assets/images/jCvaLPiSJ9s.jpg';
import img_g5h07y7msf8 from '../assets/images/g5h07y7msf8.jpg';
import img_zu0WWpi9O7Y from '../assets/images/zu0WWpi9O7Y.jpg';
import img_6wHDjoVKPwk from '../assets/images/6wHDjoVKPwk.jpg';
import img_63yd9Mr1Z2c from '../assets/images/63yd9Mr1Z2c.jpg';
import img_A0A47BnPhzE from '../assets/images/A0A47BnPhzE.jpg';
import img_IXUcYCyk89Q from '../assets/images/IXUcYCyk89Q.jpg';
import img_EzpWMS_GWDA from '../assets/images/EzpWMS-GWDA.jpg';

export const CATEGORIES: CategoryData[] = [
  { 
    name: 'Mawla Ali Series', 
    color: '#00ADEF', 
    episodes: 7, 
    description: 'Deeply beautiful series for young hearts about the Lion of Allah.', 
    image: img_mNSOaMNI3Lc
  },
  { 
    name: 'Heavenly Ladies Series', 
    color: '#EC4899', 
    episodes: 12, 
    description: 'Stories of the greatest women in Islam, from Bibi Khadija to Bibi Fatima.', 
    image: img_X0ghHtWoM8s
  },
  { 
    name: "Little Ruqayya's Journey Series", 
    color: '#A78BFA', 
    episodes: 7, 
    description: "The heartbreaking yet inspiring journey of Little Ruqayya from Medina to Damascus.", 
    image: img_5jct11kyEn8
  },
  { 
    name: 'The Shining Sun in a Faraway Land', 
    color: '#FBBF24', 
    episodes: 5, 
    description: 'Imam Ridha (as) Series for 7+ years old, exploring the journey to Khorasan.', 
    image: img_jCvaLPiSJ9s
  },
  { 
    name: 'Ramadhan Series', 
    color: '#34D399', 
    episodes: 5, 
    description: 'Special lessons and stories for the holy month of Ramadhan.', 
    image: img_g5h07y7msf8
  },
  { 
    name: 'Little Lights from Masjidun-Nabi', 
    color: '#0EA5E9', 
    episodes: 5, 
    description: 'Little lights shining from the City of the Prophet, Masjidun-Nabi.', 
    image: img_zu0WWpi9O7Y
  },
  { 
    name: 'Glimpses of Karbala with Nana', 
    color: '#EF4444', 
    episodes: 7, 
    description: 'Glimpses of Karbala told with warmth and wisdom by Nana.', 
    image: img_6wHDjoVKPwk
  },
  { 
    name: 'Mahe Ramadhan Series', 
    color: '#059669', 
    episodes: 3, 
    description: 'A shorter series focusing on the beauties of Mahe Ramadhan.', 
    image: img_63yd9Mr1Z2c
  },
  { 
    name: 'Imam Mahdi Series (+ 6 years old)', 
    color: '#8B5CF6', 
    episodes: 3, 
    description: 'Understanding the Savior of our time for children ages 6 and up.', 
    image: img_A0A47BnPhzE
  },
  { 
    name: 'Imam Mahdi Series (under 6)', 
    color: '#D946EF', 
    episodes: 6, 
    description: 'A fun and easy introduction to Imam Mahdi (ajtf) for younger children.', 
    image: img_IXUcYCyk89Q
  },
  { 
    name: 'Lady of Light Series', 
    color: '#F43F5E', 
    episodes: 5, 
    description: 'The virtues and stories of the Lady of Light, Syeda Fatima Zahra (sa).', 
    image: img_EzpWMS_GWDA
  },
];

export const AUDIOS: AudioContent[] = [
  {
    id: 'mawla-ali-1',
    title: "The Lion of Allah: Mawla Ali (as)",
    youtubeId: 'mNSOaMNI3Lc',
    thumbnail: img_mNSOaMNI3Lc,
    category: 'Mawla Ali Series',
    duration: '08:45',
    description: 'A beautiful introduction to the first Imam and the hero of Islam.',
    dominantColor: '#00ADEF'
  },
  {
    id: 'heavenly-ladies-1',
    title: 'Lady Khadija (sa): The Mother of Believers',
    youtubeId: 'X0ghHtWoM8s',
    thumbnail: img_X0ghHtWoM8s,
    category: 'Heavenly Ladies Series',
    duration: '10:15',
    description: 'The story of the great woman who stood by the Prophet (s) through everything.',
    dominantColor: '#EC4899'
  },
  {
    id: 'ruqayya-1',
    title: "Little Ruqayya's Journey Begins",
    youtubeId: '5jct11kyEn8',
    thumbnail: img_5jct11kyEn8,
    category: "Little Ruqayya's Journey Series",
    duration: '07:30',
    description: 'The start of the poignant story of Imam Hussain\'s (as) beloved daughter.',
    dominantColor: '#A78BFA'
  },
  {
    id: 'shining-sun-1',
    title: 'The Caravan to Khorasan',
    youtubeId: 'jCvaLPiSJ9s',
    thumbnail: img_jCvaLPiSJ9s,
    category: 'The Shining Sun in a Faraway Land',
    duration: '12:20',
    description: 'Join the journey of Imam Ridha (as) as he travels to far-off lands.',
    dominantColor: '#FBBF24'
  },
  {
    id: 'ramadhan-1',
    title: 'Welcoming the Guest of Allah',
    youtubeId: 'g5h07y7msf8',
    thumbnail: img_g5h07y7msf8,
    category: 'Ramadhan Series',
    duration: '05:45',
    description: 'How to prepare our hearts for the holiest month of the year.',
    dominantColor: '#34D399'
  }
];
