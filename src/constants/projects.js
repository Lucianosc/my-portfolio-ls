import {
  cuatroEnLinea1,
  cuatroEnLinea2,
  imageDraw1,
  imageDraw2,
  imageDraw3,
  wildWestRunner1,
  wildWestRunner2,
  crowdfunding2,
  crowdfunding1,
  vetRedFigma,
  vetRedProfile,
  vetRedChat,
} from "../assets";

export const projects = [
  {
    id: 1,
    title: "Crowdfunding App",
    description:
      "<p>This is a crowdfunding web 3 application that allows users to create and fund campaigns through interaction with a smart contract on Ethereum Goerli testnet. This web application is designed to provide a seamless experience for users looking to raise funds for their projects using blockchain technology.</p><p>Users can easily create campaigns for funding, set funding goals and deadlines, and receive donations from contributors. Users can also view all the campaigns that are currently in the smart contract, providing them with visibility into the latest projects seeking funding.</p><p>In addition, the application allows users to view all the campaigns that belong to the current connected wallet, providing them with a personalized view of their own campaigns and enabling them to manage their campaigns efficiently.</p><p>This project was developed with a focus on usability, ensuring that users can easily interact with the smart contract and make secure transactions. The crowdfunding web 3 application is an exciting new development in the world of decentralized finance and is an excellent example of the potential of blockchain technology to revolutionize traditional fundraising methods.</p>",
    images: [crowdfunding1, crowdfunding2],
    link: "https://google.com",
  },
  {
    id: 2,
    title: "NFT Marketplace",
    description:
      "<p>Pellentesque quis justo vel dolor dictum malesuada. Aliquam id faucibus lectus.</p>",
    images: ["https://via.placeholder.com/150x150"],
    link: "https://google.com",
  },
  {
    id: 3,
    title: "Farmacia La Mutual",
    description:
      "<p>Nam aliquet nunc eget orci dignissim, vel venenatis justo imperdiet.</p>",
    images: ["https://via.placeholder.com/150x150"],
    link: "https://google.com",
  },
];

export const uniProjects = [
  {
    id: 1,
    title: "ImageDraw App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor dui in faucibus consectetur.",
    images: [imageDraw3, imageDraw1],
    link: "https://magalimenchon.github.io/interfaces/TP1/EntregablePractico1/",
  },
  {
    id: 2,
    title: "4 en linea",
    description:
      "Pellentesque quis justo vel dolor dictum malesuada. Aliquam id faucibus lectus.",
    images: [cuatroEnLinea1, cuatroEnLinea2],
    link: "https://magalimenchon.github.io/interfaces/TP2/EntregablePractico2/",
  },
  {
    id: 3,
    title: "Wild west runner",
    description:
      "Nam aliquet nunc eget orci dignissim, vel venenatis justo imperdiet.",
    images: [wildWestRunner1, wildWestRunner2],
    link: "https://magalimenchon.github.io/interfaces/TP3/EntregablePractico3/",
  },
  {
    id: 4,
    title: "VetRed social platform",
    description:
      "Nam aliquet nunc eget orci dignissim, vel venenatis justo imperdiet.",
    images: [vetRedProfile, vetRedFigma, vetRedChat],
    link: "https://www.figma.com/file/gcMyy9pSzHX40vVdsiSVsa/Page-1?node-id=0-1&t=XbiPxwcwH6hkzkwv-0",
  },
];
