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
      "<p>Crowdfunding web 3 application that operates on the Ethereum Goerli testnet and facilitates the creation and funding of campaigns through smart contract interaction. It offers a seamless experience for users seeking blockchain-based fundraising opportunities. Users can effortlessly create campaigns, set funding goals and deadlines, and receive donations. Visibility into the latest projects seeking funding is provided by allowing users to view all ongoing campaigns within the smart contract. Additionally, users can access a personalized view of their own campaigns, enabling efficient campaign management.</p><p>This user-friendly crowdfunding web 3 app revolutionizes fundraising with blockchain, ensuring secure transactions. It offers a seamless experience with a customizable UI featuring dark and light modes. It showcases transparent and efficient fundraising, compatible with Ethereum Goerli testnet.</p>",
    images: [crowdfunding1, crowdfunding2],
    link: "https://crowdfundmeapp.netlify.app/",
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
      "<p>ImageDraw is a versatile app, empowering users to unleash their creativity. With the pencil tool, users can draw and erase on a canvas, enjoying control over pencil color and eraser thickness. Additionally, the app allows users to upload images and apply an array of filters, including saturation, blur, binarization, sepia, grayscale, sobel, and more. Whether it's doodling, editing photos, or experimenting with filters, ImageDraw offers a platform for artistic expression and image manipulation.</p>",
    images: [imageDraw3, imageDraw1],
    link: "https://magalimenchon.github.io/interfaces/TP1/EntregablePractico1/",
  },
  {
    id: 2,
    title: "4 in line",
    description:
      "<p>Web game app showcasing the classic &quot;4 in line&quot; board game. Players have the freedom to choose their preferred chip color and select from game modes offering 4, 5, or 6 in line for added challenge. The objective is to strategically place chips on the board to form a line of four, horizontally, vertically, or diagonally, before the opponent does. The app features an intuitive user interface, smooth gameplay, and engaging visuals to enhance the gaming experience. Test your skills, plan your moves wisely, and compete against friends in this captivating &quot;4 in line&quot; web game.</p>",
    images: [cuatroEnLinea1, cuatroEnLinea2],
    link: "https://magalimenchon.github.io/interfaces/TP2/EntregablePractico2/",
  },
  {
    id: 3,
    title: "Wild west runner",
    description:
      "<p>Wild West runner game app using pure JavaScript, CSS, and HTML. This exciting game allows players to choose their character's appearance and background. The objective is to navigate through obstacles and collect coins while running, players must showcase their agility and reflexes to succeed. The game offers a visually appealing experience with customizable elements that add to the immersive Wild West atmosphere. Challenge yourself, evade obstacles, collect coins, and aim for the highest score in this thrilling Wild West runner game.</p>",
    images: [wildWestRunner1, wildWestRunner2],
    link: "https://magalimenchon.github.io/interfaces/TP3/EntregablePractico3/",
  },
  {
    id: 4,
    title: "VetRed social platform",
    description:
      "<p>Our collaborative Figma project is a visually appealing social platform for veterinarians and animal lovers. It fosters a community of professionals and pet owners, facilitating knowledge sharing and connections. The user-friendly interface allows for easy navigation, profile creation, post sharing, and engaging discussions. The platform features a search function, ensuring relevant content discovery and connections based on shared interests. We prioritized visual appeal, user experience, and inclusivity, incorporating animations and intuitive layouts. Accessibility for all users was a key consideration. The platform boasts a newsfeed, messaging system, and user-generated content section for articles and videos. Additionally, a directory of veterinary professionals aids users in finding and connecting with local veterinarians.</p><p>Our polished Figma project offers a comprehensive solution, meeting the needs of veterinarians and animal lovers alike. Its engaging design, intuitive interface, and feature-rich environment make it an enticing platform for connecting with like-minded individuals who share a passion for animals.</p>",
    images: [vetRedProfile, vetRedFigma, vetRedChat],
    link: "https://www.figma.com/file/gcMyy9pSzHX40vVdsiSVsa/Page-1?node-id=0-1&t=XbiPxwcwH6hkzkwv-0",
  },
];
