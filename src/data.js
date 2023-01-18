// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import VisionImg from '../src/assets/img/vision.png';
import Feature1Img from '../src/assets/img/features/creativity.png';
import Feature2Img from '../src/assets/img/features/knowledge.png';
import Feature3Img from '../src/assets/img/features/human.png';
import Feature4Img from '../src/assets/img/features/profess.png';
import HeroImage from '../src/assets/img/hero-img.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';
import SkyMissionImg from '../src/assets/img/missions/sky.png';
import IndigoMissionImg from "../src/assets/img/missions/indigo.png";
import VioletMissionImg from "../src/assets/img/missions/violet.png";

export const navigationData = [
  {
    name: "About us",
    href: "#",
  },
  {
    name: "Our Blog",
    href: "#",
  },
  {
    name: "Academic Activities",
    href: "#",
  },
  {
    name: "Extra-curricular Activities",
    href: "#",
  },
  {
    name: "FAQs",
    href: "#",
  },
];

export const heroData = {
  title1: ` Think big `,
  title2: ` Speak data `,
  subtitle:
    "Big Data Club is an academic club for all students in the Faculty of Computer Science & Engineering of Ho Chi Minh City University of Technology.",
  btnText: "Learn more",
  image: HeroImage,
};

export const featuresData = {
  title: "Our Core Values",
  subtitle:
    "Established with the aim of creating a professional academic environment for students who have a passion for the fields of Data Science, Data Analytics, High Performance Computing, etc. We uphold 4 core values as our development orientation.",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Creative",
      description:
        "BDC always encourages its members to conduct research on fresh techniques that are more efficient than earlier approaches while still being based on fundamental principles.",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Knowledge-based",
      description:
        "In addition to its members' intense development objectives, BDC places a strong emphasis on developing fundamental knowledge and laying the groundwork for both academic pursuits and scientific research.",
      linkText: "Learn more",
      delay: "700",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "People-oriented",
      description:
        "In addition to scientific discoveries, BDC focuses on study techniques, teamwork skills, and other critical soft skills.",
      linkText: "Learn more",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Professional",
      description:
        "BDC's effective operating model is the result of the hard work and innovation of its members, who also possess strong communication, analytical, and problem-solving abilities.",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};

export const visionData = {
  image: VisionImg,
  title: "Our Vision",
  subtitle:
    "Big Data Club seeks to create a professional and highly collaborative environment for scientific and technical research with members who are passionate about big data in particular and the field of technology in general.",
};

export const missionData = [
  {
    image: SkyMissionImg,
    content:
      "Fostering members' love for study and education by assisting them in developing a thorough understanding of the specific expertise of big data.",
    bgcolor: "bg-blue-50",
  },
  {
    image: IndigoMissionImg,
    content:
      "Give students the chance to compete in academic Big Data competitions both domestically and internationally.",
    bgcolor: "bg-indigo-50",
  },
  {
    image: VioletMissionImg,
    content:
      "Establish a setting where students can improve and enhance their personal skills, particularly their academic proficiency.",
    bgcolor: "bg-violet-50",
  },
];

export const ctaData = {
  title: 'Try for free!',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};

export const footerData = {
  //logo: Logo,
  address: 'Warehouse Society, 234 Bahagia Ave Street PRBW 29281',
  email: 'info@warehouse.project',
  phone: '1-232-3434 (Main)',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.',
  icon: <BsChatDotsFill />,
};
