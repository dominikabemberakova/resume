import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Book Management System',
        description: "Our goal was to create a web-based electronic library system for book lending and management. Users can register, authenticate, recover passwords, browse books, view borrowed books, and get recommendations. Admins can manage book inventory, user registrations, and borrowing requests. I developed the frontend using PHP and CSS, ensuring an intuitive interface. The frontend interacts with the backend, built with Express and MongoDB, deployed on AWS for scalability. User notifications are sent via Node Mailer with AWS SES.",
        tools: ['PHP', 'CSS', 'MariaDB'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Detection of Glaucoma using Deep Neural Networks',
        description: 'Glaucoma, also known as glaucoma, is a chronic disease that affects the optic nerve and can lead to irreversible vision loss, including total blindness. This work focuses on the use of advanced machine learning methods to detect glaucoma. The main objective is to explore applications and improvements in the diagnosis of this disease through deep neural networks. By combining three different fundus image databases and segmenting them using the U-Net, we have segmented the optic nerve and its excavation region, thus allowing us to identify areas that are characteristic of glaucoma. We then classified these predicted segmented images using neural network models such as ResNet, VGG-16 and MobileNet. We compared the results with the classification of the original data and the data with the original labeled segmentation masks. We obtained the best results with MobileNet with an accuracy of 76\% using segmented predicted data in combination with classification.',
        tools: ['Python', 'VGG-16', 'MobileNet', 'ResNet50', 'U-Net', 'CNN'],
        role: 'Machine Learning Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Social network for sharing food recipes',
        description: 'In it\'s introduction, the bachelor thesis analyses the trends in the field of social networks and web applications. It focuses on the design of a social network intended for sharing kitchen recipes. The user of this social network can personalize recipes at home. In the first chapter, we introduce and describe the basic concepts related to social networking and web applications. Later, the thesis discusses the specification and development of the social network to make it as convenient as possible for the user. The last part of the thesis describes the actual implementation of the system. It contains the design of the database, the use cases of the social network and also a description of the results we achieved.',
        tools: ['React', 'Tailwind', 'CSS', 'Next.js', 'Firebase', 'Google Cloud', 'Vercel'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },