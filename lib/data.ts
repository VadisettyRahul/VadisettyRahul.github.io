import React from "react";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import microsoft from "@/public/CertificationsImage/microsoft.png";
import hashicorp from "@/public/CertificationsImage/hashicorp_logo.jpg";
import amazon from "@/public/CertificationsImage/amazon_logo.jpg";
import comptia_logo from "@/public/CertificationsImage/comptia_logo.jpg";
import google from "@/public/CertificationsImage/google.jpg";
import cloud_native from "@/public/CertificationsImage/cloud_native_computing_foundation_logo.jpg";
import aws_logo from "@/public/CertificationsImage/aws_logo.jpg";

import {
  FaUserGroup,
  FaUsers,
  FaUsersGear,
  FaUsersLine,
} from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const articles = [
  {
    id: 1,
    title: "The Effects of Cyber Security Attacks on Data Integrity in AI",
    description:
      "Artificial Intelligence (AI) systems heavily rely on vast amounts of data for training and decision-making. However, cybersecurity attacks pose a significant threat to data integrity, leading to biased predictions, misinformation, and compromised decision-making.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zLRrw_wAAAAJ&citation_for_view=zLRrw_wAAAAJ:g3aElNc5_aQC",
    image: "https://picsum.photos/id/1/200/300",
  },
  {
    id: 2,
    title:
      "Efficient large-scale data based on cloud framework using critical influences on financial landscape",
    description:
      "Key aspects such as data security, real-time analytics, cost efficiency, and regulatory compliance play a crucial role in ensuring the effectiveness of cloud-based financial systems.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zLRrw_wAAAAJ&citation_for_view=zLRrw_wAAAAJ:hMsQuOkrut0C",
    image: "https://picsum.photos/id/1/200/300",
  },
  {
    id: 3,
    title: "Generative AI for Cyber Threat Simulation and Defense",
    description:
      "Generative AI enhances cybersecurity by simulating various cyber threats and strengthening possible defense mechanisms.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zLRrw_wAAAAJ&citation_for_view=zLRrw_wAAAAJ:TIZ-Mc8IlK0C",
    image: "https://picsum.photos/id/1/200/300",
  },
];

export const memberships = [
  {
    title: "Soft Computing",
    role: "Distinguished Fellow Membership of the Soft Computing.",
    icon: FaUsers,
    link: "https://scrs.in/",
  },
  {
    title: "Institute of Electrical and Electronics Engineers",
    role: "Senior Professional Membership.",
    icon: LuUsers,
    link: "https://www.ieee.org/",
  },
  {
    title: "Raptors Fellowship",
    role: "Raptors Fellowship Membership.",
    icon: FaUsersGear,
    link: "https://www.raptors.dev/",
  },
  {
    title: "Soft computing",
    role: "Fellow Membership of the Soft Computing.",
    icon: FaUserGroup,
    link: "https://scrs.in/",
  },
  {
    title: "IICSPA",
    role: "Sr fellow membership IICSPA.",
    icon: FaUsersLine,
    link: "https://www.iicspa.org/",
  },
];

export const experiences = [
  {
    role: "Sr software engineer",
    company: "U.S. Bank · Full-time",
    duration: "Mar 2023 - Present · 2 yrs 1 months",
  },
  {
    role: "Sr Devops Engineer",
    company: "Optimoz · Full-time",
    duration: "Nov 2021 - Dec 2022 · 1 yr 2 months",
  },

  {
    role: "Sr Systems Engineer",
    company: "MyVest · Full-time",
    duration: "Jun 2021 - Nov 2021 · 6 months",
  },
  {
    role: "Cloud Engineer",
    company: "Oportun · Full-time",
    duration: "Nov 2019 - Apr 2021 · 1 yr 6 months",
  },
  {
    role: "Software Engineer",
    company: "Nextgen consulting Inc",
    duration: "Oct 2018 - Nov 2019 · 1 yr 2 months",
  },
  {
    role: "Programmer Analyst",
    company: "I28 Technologies Corporation",
    duration: "Mar 2017 - Aug 2018 · 1 yr 6 months",
  },
  {
    role: "Programmer Analyst",
    company: "Ybrant Technologies LLC",
    duration: "Sep 2016 - Feb 2017 · 6 months",
  },
  {
    role: "Programmer Analyst",
    company: "Opera Technologies, Inc.",
    duration: "May 2016 - Sep 2016 · 7 months",
  },
  {
    role: "Programmer Analyst",
    company: "IT CRATS, Inc.",
    duration: "Mar 2016 - May 2016 · 7 months",
  },
];

export const certifications = [
  {
    image: microsoft,
    title: "Microsoft Azure Administrator Associate",
    altText: "Azure Admin Associate Badge",
    credentialLink:
      "https://learn.microsoft.com/en-us/users/rv-9399/credentials/74dcff2cf7890115?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    image: hashicorp,
    title: "Terraform Associate Hasicorp",
    altText: "PMP Certification Badge",
    credentialLink:
      "https://www.credly.com/earner/earned/badge/b4b292b4-3a05-4ed3-85db-5b1df1420ddf",
  },
  {
    image: amazon,
    title: "Amazon Web Services Security Specialty",
    altText: "PMP Certification Badge",
    credentialLink:
      "https://www.credly.com/badges/b36d2453-9e62-4d68-b922-748094ccd756",
  },
  {
    image: comptia_logo,
    title: "CompTIA Security+",
    altText: "PMP Certification Badge",
    credentialLink: "#",
  },
  {
    image: google,
    title: "Google Cloud Security",
    altText: "PMP Certification Badge",
    credentialLink:
      "https://www.credential.net/5d093618-ed0a-45fe-9907-cfb5977f80e0#gs.kqzvvy",
  },
  // {
  //   image: microsoft,
  //   title:
  //     "Microsoft Certified Systems Administrator: Data Engineering with Azure",
  //   altText: "PMP Certification Badge",
  //   credentialLink: "#",
  // },
  {
    image: cloud_native,
    title: "Certified Kubernetes Admin ",
    altText: "PMP Certification Badge",
    credentialLink:
      "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/6e0b5ee1-0bbe-4a8d-891d-77773db6ceec-rahul-vadisetty-certified-kubernetes-administrator-cka-certificate.pdf",
  },
  // {
  //   image: api_academy_logo,
  //   title: "API Designer",
  //   altText: "PMP Certification Badge",
  //   credentialLink: "#",
  // },
  // {
  //   image: datastax_logo,
  //   title: "Apache Cassandra 3.x Administrator Associate Certification",
  //   altText: "PMP Certification Badge",
  //   credentialLink:
  //     "https://www.datastax.com/academy/certs/lookup/37fff287-829b-48d1-8fa4-3d95941131dc/index.html",
  // },
  // {
  //   image: sumo_logic_logo,
  //   title: "Sumo Logic Fundamentals Exam ",
  //   altText: "PMP Certification Badge",
  //   credentialLink: "https://sumologic.talentlms.com/plus/",
  // },
  {
    image: aws_logo,
    title: "AWS Certified Solutions Architect - Associate",
    altText: "PMP Certification Badge",
    credentialLink:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/",
  },
  {
    image: aws_logo,
    title: "AWS Certified Solutions Architect - Associate (SAA)",
    altText: "PMP Certification Badge",
    credentialLink:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/",
  },
  {
    image: microsoft,
    title: "Microsoft Certified: Azure Administrator Associate",
    altText: "PMP Certification Badge",
    credentialLink:
      "https://learn.microsoft.com/api/credentials/share/en-us/rv-9399/A780917EE021C376?sharingId",
  },
  {
    image: microsoft,
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    altText: "PMP Certification Badge",
    credentialLink:
      "https://learn.microsoft.com/en-us/users/rv-9399/credentials/eb281105b56bcbd9?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    image: aws_logo,
    title: "AWS Certified Solutions Architect – Professional",
    altText: "PMP Certification Badge",
    credentialLink:
      "https://www.credly.com/badges/56108816-5306-49cd-aaae-79dda3892c25?source=linked_in_profile",
  },
  {
    image: microsoft,
    title: "Microsoft Certified: Azure Security Engineer Associate",
    altText: "PMP Certification Badge",
    credentialLink:
      "https://learn.microsoft.com/en-us/users/rv-9399/transcript/7kw30clw2n58429",
  },
];

export const awards = [
  {
    conferenceName: "ICISAS 2025",
    awardName: "Best Presentation Award",
    image: "/best_ppt.jpg",
    date: "February 22-23,2025",
    publisher: "Taylor and Francis",
    link: "https://conference.curtindubai.ac.ae/icisas-2025/",
    mediaLink:
      "https://www.khaleejtimes.com/kt-network/icisas-2025-dubai-conference-explores-advancements-in-ai-cloud-security-and-ethical-technology",
  },
  {
    conferenceName: "ICEC 2024",
    awardName: "Best Paper Award",
    image: "/best_paper.jpg",
    date: "November 23–25, 2024",
    publisher: "Taylor and Francis",
    link: "https://icecconf.org/icec_2024-2/",
    mediaLink:
      "https://www.india.com/business/rahul-vadisetty-honored-for-outstanding-contribution-to-ai-and-cybersecurity-receives-best-paper-award-at-ieee-icec-2024-conference-2-7590579/",
  },
  {
    conferenceName: "OCIT 2024",
    awardName: "Best Paper Award",
    image: "/best_paper.jpg",
    date: "December 12-14, 2024",
    publisher: "Taylor and Francis",
    link: "https://www.oits-icit.org/oits-archieve/OCIT_2024_Website/",
    mediaLink:
      "https://www.thehansindia.com/business/rahul-vadisetty-harnessing-ai-to-revolutionize-predictive-healthcare-932304",
  },
  {
    conferenceName: "ICDACS 2024",
    awardName: "Best Paper Award",
    image: "/best_paper.jpg",
    date: "December 20-22, 2024",
    publisher: "Taylor and Francis",
    link: "https://icdacs.github.io/",
    mediaLink:
      "https://news24online.com/information/ai-innovation-in-healthcare-vadisetty-polamarasetti-win-best-paper-award-at-springer-dacs-2024/502405/",
  },
  {
    image: "/best_paper.jpg",
    conferenceName:
      "International Conference On ICTBIG (IEEE Computer Society Chapter & IEEE Madhya Pradesh Section.)",
    awardName: "Best Paper Award",
    date: "December 12-14, 2024",
    link: "https://indore.hosting.acm.org/ictbig2024/index.htm",
    mediaLink:
      "https://www.freepressjournal.in/latest-news/revolutionizing-cloud-data-sharing-rahul-vadisetty-and-anand-polamarasetti-wins-best-paper-award-at-ieee-ictbig-2024-conference/",
  },
  {
    image: "/iaia-big.png",
    conferenceName: "IAIA Award",
    awardName: "IAIA AI Award",
    date: "December 20-22, 2024",
    publisher: "Taylor and Francis",
    link: "https://www.iaiawards.com/",
    mediaLink: "https://www.iaiawards.com/team-1/rahul-vadisetty/",
  },
];

export const patents = [
  {
    year: "2025",
    category: "Canada copy Right",
    items: [
      {
        name: "Artificial Intelligence and Machine Learning System for Risk Assessment and Early Prediction of Lung and Heart Cancer",
      },
    ],
  },
  {
    category: "UK Patents",
    year: "2024",
    items: [
      {
        name: "AI BASED DEVICE FOR DATA SECURITY",
      },
      {
        name: "AI BASED CRYPTOCURRENCY ANALYSING DEVICE",
      },
    ],
  },
  {
    category: "Indian Patent",
    year: "2024",
    items: [
      {
        name: "ARTIFICIAL INTELLIGENCE (AI) BASED CLOUD SECURITY DETECTING DEVICE",
      },
      { name: "AI BASED CYBER SECURITY DATA ANALYTIC DEVICE" },
    ],
  },
  {
    category: "Canada Copyright",
    year: "2024",
    items: [
      { name: "AI-DRIVEN NETWORK OPTIMIZATION FOR 6G WIRELESS SYSTEMS" },
      { name: "REAL-TIME CYBER ATTACK MITIGATION USING ML ALGORITHMS" },
    ],
  },
  {
    category: "UK Patent",
    year: "2024",
    items: [
      { name: "AI based Intrusion Alert device" },
      {
        name: "AI based comprehensive data encryption and decryption device",
      },
    ],
  },
];

export const books = [
  {
    title: "Amazon Book",
    publisher: "Amazon",
    link: "https://www.amazon.com/dp/B0DKB684GM/ref=sr_1_1?crid=S8FSNNA0ZHX3&dib=eyJ2IjoiMSJ9.JxKLN7gbovVI2LNeKc-B_Q.qrN7ZGNgzrCH1BjFcWESu9Lj4Kv5ttJtDIiZKe17sns&dib_tag=se&keywords=ASIN%3A+B0DKB684GM&qid=1729353415&sprefix=asin+b0dkb684gm%2Caps%2C90&sr=8-1",
  },
  {
    title: "AI for CHAT GPT TOOLS for Teaching and Learning Process",
    publisher: "Redshine Publications Sweden",
    link: "https://redshine.co.in/product/9789173080859/",
  },
  {
    title: "CHATGPT FOR LESSON PLANNING - Book Chapter",
    publisher: "Redshine Publications Sweden",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zLRrw_wAAAAJ&authuser=1&citation_for_view=zLRrw_wAAAAJ:M7yex6snE4oC",
  },
  {
    title: "CHATGPT FOR STUDENT SUPPORT SYSTEMS - Book Chapter",
    publisher: "Redshine Publications Sweden",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zLRrw_wAAAAJ&authuser=1&citation_for_view=zLRrw_wAAAAJ:kz9GbA2Ns4gC",
  },
  {
    title:
      "Contemporary Issues in Science, Computer Science, Engineering and Technology - Editor",
    publisher: "Redshine Publications Sweden",
    link: "https://redshine.co.in/product/9789173080927/?srsltid=AfmBOoqalvWzLZrAugTwD3mfY5wT4Rb9xEiKs5vrc9TvmRJebbjg6fcL",
  },
  {
    title:
      "Introduction and Importance of Artificial Intelligence (AI) - Editor",
    publisher: "Redshine Publications Sweden",
    link: "https://redshine.co.in/product/9789141001053/?srsltid=AfmBOorinvMMuN7auUMFoc2cdKJ2FKN9fy6SprA2RQF_EEVp55ElUskT",
  },
  {
    title:
      "Artificial Intelligence in Education: Innovations and Applications - Associate Editor",
    publisher: "Redshine Publications Sweden",
    link: "https://redshine.co.in/product/9789141001138/?srsltid=AfmBOorWZpF69TY95lB9uFWfJK9MyEdDEyl3zjH0NglA-q0_mTFo7t18",
  },
];
