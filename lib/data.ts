import React from "react";
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

export const education = [
  {
    degree: "Masters in Electrical Engineering",
    university: "Wayne State University",
    location: "Detroit, MI",
    logo: "/wayne_state_university_logo.jpeg",
  },
  {
    degree: "Bachelors in Electronics and Communications",
    university: "Sri Chaitanya Engineering College",
    location: "Kommadi, Madhurawada, Visakhapatnam, Andhra Pradesh, 530048",
    logo: "/SriChaitanyaEngineeringCollege.avif",
  },
];

export const articles = [
  {
    image: "/msn.svg",
    conferenceName:
      "6th Doctoral Symposium on Computational Intelligence (DoSCI 2025)",
    shortName: "DoSCI 2025",
    publisher: "Springer",
    date: "28th-29th March 2025",
    link: "https://conference.curtindubai.ac.ae/icisas-2025/",
    mediaLink:
      "https://www.msn.com/en-us/news/technology/dosci-2025-international-conference-doctoral-symposium-on-computational-intelligence/ar-AA1CPxYS",
  },
  {
    image: "/DNA.svg",
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    shortName: "ICADAC 2025",
    publisher: "Taylor and Francis",
    date: "February 28 and March 1,2025",
    link: "https://www.icadac.in/",
    mediaLink:
      "https://www.dnaindia.com/brand-desk/report-two-ai-researchers-win-prestigious-award-for-advancing-cybersecurity-3146239",
  },
  {
    image: "/khaleej-times.svg",
    conferenceName:
      "The International Conference on Innovation, Sustainability, and Applied Sciences (ICISAS 2025)",
    shortName: "ICISAS 2025",
    publisher: "Taylor and Francis",
    date: "February 22-23,2025",
    link: "https://conference.curtindubai.ac.ae/icisas-2025/",
    mediaLink:
      "https://www.khaleejtimes.com/kt-network/icisas-2025-dubai-conference-explores-advancements-in-ai-cloud-security-and-ethical-technology",
  },
  {
    image: "/India-header-logo.svg",
    conferenceName:
      "The International Conference on Intelligent Computing and Emerging Communication Technologies ICEC 2024",
    shortName: "ICEC 2025",
    publisher: "IEEE",
    date: "November 23–25, 2024",
    link: "https://icecconf.org/icec_2024-2/",
    mediaLink:
      "https://www.india.com/business/rahul-vadisetty-honored-for-outstanding-contribution-to-ai-and-cybersecurity-receives-best-paper-award-at-ieee-icec-2024-conference-2-7590579/",
  },
  {
    image: "/hans_india.png",
    conferenceName:
      "OITS International Conference on Information Technology OCIT 2024",
    shortName: "OCIT 2025",
    subtitle: "Insurance Industry Impact",
    publisher: "IEEE",
    date: "December 12-14, 2024",
    link: "https://www.oits-icit.org/oits-archieve/OCIT_2024_Website/",
    mediaLink:
      "https://www.thehansindia.com/business/rahul-vadisetty-harnessing-ai-to-revolutionize-predictive-healthcare-932304",
  },
  {
    image: "/london insider.png",
    conferenceName:
      "International Institute of Computer Science Professional Association (IICSPA)",
    shortName: "IICSPA 2024",
    publisher: "IICSPA",
    date: "September 13, 2024",
    link: "http://iicspa.org",
    mediaLink:
      "https://londoninsider.co.uk/iicspa-announces-fourteen-fellows-for-2024/",
  },
  {
    image: "/logon24.webp",
    conferenceName:
      "7th International Conference on Data Analytics and Cyber Security (DACS 2024)",
    shortName: "DACS 2025",
    publisher: "Springer",
    date: "December 20-22, 2024",
    link: "https://icdacs.github.io/",
    mediaLink:
      "https://news24online.com/information/ai-innovation-in-healthcare-vadisetty-polamarasetti-win-best-paper-award-at-springer-dacs-2024/502405/",
  },
  {
    image: "/Outlook.svg",
    shortName: "Ayushman Hospital",
    conferenceName: "Ayushman Hospital",
    publisher: "Ayushman Hospital",
    date: "October 17th, 2024",
    link: "https://www.acoit.in/contact.php",
    mediaLink:
      "https://www.outlookindia.com/healthcare-spotlight/dr-swami-karri-ceo-aayushman-hospital-praises-mr-rahul-vadisetty-and-mr-anand-polamarasettis-groundbreaking-research-on-ai-based-lung-segmentation/",
  },
  {
    image: "/freePress.avif",
    conferenceName:
      "International Conference On ICTBIG (IEEE Computer Society Chapter & IEEE Madhya Pradesh Section.)",
    shortName: "ICTBIG",
    publisher: "IEEE",
    date: "December 12-14, 2024",
    link: "https://indore.hosting.acm.org/ictbig2024/index.htm",
    mediaLink:
      "https://www.freepressjournal.in/latest-news/revolutionizing-cloud-data-sharing-rahul-vadisetty-and-anand-polamarasetti-wins-best-paper-award-at-ieee-ictbig-2024-conference/",
  },
];

export const memberships = [
  {
    title: "IPMA Fellow",
    role: "IPMA Fellow Membership.",
    icon: FaUsersLine,
    link: "https://www.ipma-usa.org/",
  },
  {
    title: "Soft Computing",
    role: "Distinguished Fellow Membership of the Soft Computing.",
    icon: FaUsers,
    link: "https://scrs.in/",
  },
  {
    title: "Soft computing",
    role: "Fellow Membership of the Soft Computing.",
    icon: FaUserGroup,
    link: "https://scrs.in/",
  },
  {
    title: "Raptors Fellowship",
    role: "Raptors Fellowship Membership.",
    icon: FaUsersGear,
    link: "https://www.raptors.dev/",
  },
  {
    title: "IICSPA",
    role: "Sr fellow membership IICSPA.",
    icon: FaUsersLine,
    link: "https://www.iicspa.org/",
  },
  {
    title: "Institute of Electrical and Electronics Engineers",
    role: "Senior Professional Membership.",
    icon: LuUsers,
    link: "https://www.ieee.org/",
  },
  {
    title: "ACM Professional Membership",
    role: "Professional Membership.",
    icon: FaUsersLine,
    link: "https://www.acm.org/",
  },
  {
    title: "ADROID CMS",
    role: "AI Advisory Board",
    icon: FaUsersGear,
    link: "https://www.adroidcms.com/advisory-board/",
  },
  {
    title: "Leader Excellence",
    role: "Leader Excellence Member",
    icon: FaUsersGear,
    link: "https://leadersexcellence.com/",
  },

  {
    title: "Sigma Xi",
    role: "Sigma Xi Lifetime Member",
    icon: FaUsersLine,
    link: "https://www.sigmaxi.org/",
  },
  {
    title: "Scholarly Rank",
    role: "AI Advisory Board Member",
    icon: FaUsersLine,
    link: "https://www.scholarrank.com/index.html",
  },
  {
    title: "Internet Society Washington DC Chapter",
    role: "Internet Society Washington DC Chapter Member",
    icon: FaUsersGear,
    link: "https://isoc-dc.org/",
  },
  {
    title: "Internet Society US San Francisco Bay Area Chapter",
    role: "Internet Society US San Francisco Bay Area Chapter Member",
    icon: FaUsersGear,
    link: "https://www.sfbayisoc.org/",
  },
  {
    title: "Internet Society US New York Chapter",
    role: "Internet Society US New York Chapter Member",
    icon: FaUsersGear,
    link: "http://isoc-ny.org/",
  },
  {
    title: "Internet Society India Chennai Chapter",
    role: "Internet Society India Chennai Chapter Member",
    icon: FaUsersGear,
    link: "http://isocindiachennai.org/",
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
    conferenceName:
      "6th Doctoral Symposium on Computational Intelligence (DoSCI 2025)",
    awardName: "Best Paper Award",
    image: "/best_paper.jpg",
    date: "28th-29th March 2025",
    publisher: "Springer",
    link: "https://www.dosci-conf.com/",
    mediaLink:
      "https://www.msn.com/en-us/news/technology/dosci-2025-international-conference-doctoral-symposium-on-computational-intelligence/ar-AA1CPxYS",
  },
  {
    conferenceName: "IDEATHON 2025",
    awardName: "IDEATHON Winner",
    image: "/ideathon.png",
    date: "March 28-29,2025",
    publisher: "FIU",
    link: "https://scrs.in/conference/ideathon2025/page/Awards/",
    mediaLink: "https://scrs.in/conference/ideathon2025/page/Awards/",
  },
  {
    conferenceName: "ICADAC 2025",
    awardName: "Best Paper Award",
    image: "/best_paper.jpg",
    date: "February 28 and March 1,2025",
    publisher: "Taylor and Francis",
    link: "https://www.icadac.in/",
    mediaLink:
      "https://www.dnaindia.com/brand-desk/report-two-ai-researchers-win-prestigious-award-for-advancing-cybersecurity-3146239",
  },
  {
    conferenceName: "ICCSIS 2025",
    awardName: "Best Paper Award",
    image: "/best_paper.jpg",
    date: "January 10-12,2025",
    publisher: "Taylor and Francis",
    link: "https://iccsis.com/",
    mediaLink: "https://iccsis.com/",
  },
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
    conferenceName: "ICTBIG 2024",
    awardName: "Best Paper Award",
    date: "December 12-14, 2024",
    link: "https://indore.hosting.acm.org/ictbig2024/index.htm",
    mediaLink:
      "https://www.freepressjournal.in/latest-news/revolutionizing-cloud-data-sharing-rahul-vadisetty-and-anand-polamarasetti-wins-best-paper-award-at-ieee-ictbig-2024-conference/",
  },
  {
    image: "/claroawards_logo.jpeg",
    conferenceName: "Silver Awards AI",
    awardName:
      "Innovation and excellence in the field of Artificial Intelligence",
    date: "Nov 20, 2024",
    publisher: "Claro Awards",
    link: "https://claroawards.com/winners.html",
    mediaLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7265065643052355584/",
  },
  {
    image: "/iaia-big.png",
    conferenceName: "IAIA AI Award",
    awardName: "IAIA AI Award",
    date: "2023",
    publisher: "Taylor and Francis",
    link: "https://www.iaiawards.com/",
    mediaLink: "https://www.iaiawards.com/team-1/rahul-vadisetty/",
  },
];
export const workspaceList = [
  {
    conferenceName: "SecAI + Workshop",
    image: "/CompTIA.png",
    date: "May 12-16,2025",
    publisher: "FIU",
    link: "https://www.comptia.org/",
    mediaLink: "https://www.comptia.org/",
  },
];
export const patentExhibition: {
  exhibitionName: string;
  exhibitionLink: string;
  eventDate: string;
}[] = [
  {
    exhibitionName: "The Capital Rare Book Fair",
    exhibitionLink: "https://finefairs.com/capital-rare-book-fair",
    eventDate: "2-4 May 2025",
  },
  {
    exhibitionName: "AI & CYBER SECURITY CONCLAVE 2025",
    exhibitionLink: "https://www.agra.sharda.ac.in/aiconclave/index.php",
    eventDate: "22-23 April 2025",
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
        name: "Application Number : 6377598 - AI BASED DEVICE FOR DATA SECURITY ",
      },
      {
        name: "Application Number : 6377599 - AI BASED CRYPTOCURRENCY ANALYSING DEVICE",
      },
      {
        name: "Application Number : 6395994 - AI based Intrusion Alert device",
      },
      {
        name: "Application Number : 6402619 - AI based comprehensive data encryption and decryption device",
      },
    ],
  },
  {
    category: "Indian Patent",
    year: "2024",
    items: [
      {
        name: "Application Number : 422830-001 - ARTIFICIAL INTELLIGENCE (AI) BASED CLOUD SECURITY DETECTING DEVICE",
      },
      {
        name: "Application Number : 422832-001 - AI BASED CYBER SECURITY DATA ANALYTIC DEVICE",
      },
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
];

export const books = [
  {
    title: "Amazon Book",
    publisher: "Amazon",
    link: "https://www.amazon.com/dp/B0DSZQ95VF",
  },
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

export const judgeData = [
  {
    conferenceName:
      "ACM Transactions on Multimedia Computing, Communications and Applications",
    topicName:
      "Tensor Multi-feature Fusion for Anomaly Detection in Internet of Multimedia Things",
    conferenceSortName:
      "ACM Transactions on Multimedia Computing, Communications and Applications",
    event:
      "ACM Transactions on Multimedia Computing, Communications and Applications",
    date: "Apr 2, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "IEEE Transactions on Network and Service Management",
    topicName:
      "Slicing for AI: An Online Learning Framework for Network Slicing Supporting AI Services ",
    conferenceSortName: "IEEE Transactions on Network and Service Management",
    event: "IEEE Transactions on Network and Service Management",
    date: "Mar 30, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "IEEE Transactions on Network and Service Management",
    topicName:
      "Classifying Internet of Health Things Cyberattacks using Ensemble Learning Based Directed Acyclic Graph Structured Time Series Framework: A Comparative Study",
    conferenceSortName: "IEEE Transactions on Network and Service Management",
    event: "IEEE Transactions on Network and Service Management",
    date: "Mar 30, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "IEEE Transactions on Network and Service Management",
    topicName:
      "An Incentive Mechanism for Vehicular Crowdsourcing Services Based on Deep Reinforcement Learning ",
    conferenceSortName: "IEEE Transactions on Network and Service Management",
    event: "IEEE Transactions on Network and Service Management",
    date: "Mar 30, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "Internet Technology Letters",
    topicName:
      "Artificial Intelligence Technique for Cyber-Attack Prevention in Edge Computing Networks ",
    conferenceSortName: "Internet Technology Letters",
    event: "Internet Technology Letters",
    date: "Feb 27, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "Internet Technology Letters",
    topicName:
      "Dynamic Transmission Time Allocation Using Sigmoid Function for Energy Optimization in WSNs ",
    conferenceSortName: "Internet Technology Letters",
    event: "Internet Technology Letters",
    date: "Feb 27, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "Internet Technology Letters",
    topicName:
      "MAVEN: Majority Voting Ensemble for Attack Detection on IoT Data Streams",
    conferenceSortName: "Internet Technology Letters",
    event: "Internet Technology Letters",
    date: "Feb 2, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "IEEE Transactions on Network and Service Management",
    topicName:
      "GT4MAGR: Leveraging Graph Transformer and Multi-Agent Deep Reinforcement Learning for Robust Routing in Software Defined Networks",
    conferenceSortName: "IEEE Transactions on Network and Service Management",
    event: "IEEE Transactions on Network and Service Management",
    date: "Jan 9, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "IEEE Transactions on Big Data",
    topicName:
      "Traffic Flow Forecasting Based on Complex Gray Relational Degree Network and Multi-Period Exattention-GRU Model",
    conferenceSortName: "IEEE Transactions on Big Data",
    event: "IEEE Transactions on Big Data",
    date: "Jan 8, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "IEEE Transactions on Big Data",
    topicName: "Sentences based Adversarial Attack on Generated Text Detectors",
    conferenceSortName: "IEEE Transactions on Big Data",
    event: "IEEE Transactions on Big Data",
    date: "Jan 8, 2025",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "IEEE Transactions on Network and Service Management",
    topicName:
      "An Adaptive Contention Window Backoff Scheme Differentiating Network Conditions Based on Deep Q-Learning Network",
    conferenceSortName: "IEEE Transactions on Network and Service Management",
    event: "IEEE Transactions on Network and Service Management",
    date: "Nov 11, 2024",
    role: "Journal Peer Review",
  },
  {
    conferenceName: "IEEE Transactions on Network and Service Management",
    topicName:
      "A General Approach for Network Video Traffic Classification Using Improved Deep Learning",
    conferenceSortName: "IEEE Transactions on Network and Service Management",
    event: "IEEE Transactions on Network and Service Management",
    date: "Nov 11, 2024",
    role: "Journal Peer Review",
  },
];

export const judgeConference = [
  {
    conferenceName: "3rd Doctoral Symposium on Human Centered Computing",
    conferenceTopicName:
      "Designing Industry-Specific Modular Solutions Using Salesforce OmniStudio for Accelerated Digital Transformation",
    conferenceSortName: "Human 2025",
    event: "Human 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName: "3rd Doctoral Symposium on Human Centered Computing",
    conferenceTopicName:
      "Enhancing Strategic Business Decisions with AI-Powered Forecasting Models in Salesforce CRMT",
    conferenceSortName: "Human 2025",
    event: "Human 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName: "3rd Doctoral Symposium on Human Centered Computing",
    conferenceTopicName:
      "Exploring Advanced API Strategies with MuleSoft for Seamless Salesforce Integration in Multi-Cloud Environments",
    conferenceSortName: "Human 2025",
    event: "Human 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "The International Conference on Innovation, Sustainability, and Applied Sciences",
    conferenceTopicName:
      "Exploring Factors Affecting Employee Motivation in the Private Sector: A Preliminary Study on Organizations in Amman",
    conferenceSortName: "ICISAS 2025",
    event: "ICISAS 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "The International Conference on Innovation, Sustainability, and Applied Sciences",
    conferenceTopicName:
      "A DETAILED SURVEY ON HEAVY HITTER DETECTION IN CLOUD DATA CENTRE NETWORK",
    conferenceSortName: "ICISAS 2025",
    event: "ICISAS 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "The International Conference on Innovation, Sustainability, and Applied Sciences",
    conferenceTopicName:
      "Screw Defect Detection using Xception Algorithm over Resnet50 Algorithm for Better Accuracy",
    conferenceSortName: "ICISAS 2025",
    event: "ICISAS 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "The International Conference on Innovation, Sustainability, and Applied Sciences",
    conferenceTopicName: "Facial Sketch Mapping and Recognition in Forensics	",
    conferenceSortName: "ICISAS 2025",
    event: "ICISAS 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "The International Conference on Innovation, Sustainability, and Applied Sciences",
    conferenceTopicName:
      "Intelligent Monitoring and Predictive Analytics for Dairy Farming: IoT-Driven Mastitis Detection and Milk Production Enhancement",
    conferenceSortName: "ICISAS 2025",
    event: "ICISAS 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "Advanced Techniques in Deep Learning for Pancreatic Cancer Detection and Classification",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "AI-Powered Privacy Shields and Machine Learning Approaches for Securing Digital Money Transactions: A Systematic Review",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "Advancements in Brain Tumor Detection: A Deep Learning Approach: A Comprehensive Analysis of Machine Learning Models in Medical Imaging",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "UNET-BASED DEEP LEARNING MODEL FOR LIVER CIRRHOSIS STAGE CLASSIFICATION AND TUMOR SIZE DETECTION",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName: "ML Based Finance and Budget Optimiser",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "Analysis of Electricity Generation on live data from Regions of Sikkim",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "Securing Assistive Smart Glasses: A Framework for Mitigating Cybersecurity Threats",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "Advanced Path Planning Algorithms on NVIDIA Jetson TX2 for Assistive Technologies",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Advanced Data Analytics and Computing (ICADAC) 2025",
    conferenceTopicName:
      "A Detailed Survey of Security Threats in Wireless Sensor Network",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Survey on Information Security and Quantum Cryptography",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Integrating Al for Enhanced Battery Lifespan and Efficiency in Electric Vehicles",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "The Role of Artificial Intelligence and Machine Learning in Autonomous Vehicle Diagnostics and Control",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Data Science and Regulatory Affairs: Navigating the Complex Landscape of Drug Approval Processes",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Smart Semiconductor Wafer Inspection Systems Integrating Al for Increased Efficiency",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Global Parts Management through Data and AI Leveraging Structured and Unstructured Data",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Jenkins-The Leading Automation Server for Continuous Integration and Continuous Delivery",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName: "Simulation of Obstacle Avoidance Robots",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "The Future of Al in Big Data: Cloud Platforms are Evolving to Support Machine Learning and Analytics",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Real-Time Adaptation: Change Data Capture in Modern Computer Architecture",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "YOL-SFV2: An Effective Deep Learning Technique to Detect and Classify the Human Face Action in Thermal Images",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Securing the Edge: A Comprehensive Review of Adaptive Video Streaming Security Mechanisms in Decentralized Environments",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Al-Driven Business Intelligence: Unlocking the Future of Decision-Making",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "A Systematic Review of Artificial Intelligence and Cyber Security in Higher Education Space",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "ESP JOURNAL OF ENGINEERING & TECHNOLOGY ADVANCEMENTS (ESP-JETA)",
    conferenceTopicName:
      "Building Robust Al Systems in Finance: The Indispensable Role of Data Engineering and Data Quality",
    conferenceSortName: "ICICCS-2024",
    event: "ICICCS-2024",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName:
      "Application Development with Agile and Django-React Framework: A Case Study on Reliability Testing with Bus Ticketing System",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName:
      "Unsteady Hydromagnetic Fluid Flow along an Inclined Plane with Heat and Mass Transfer under the Effect of Thermal Radiation",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName:
      "Automated Behaviour Model Generation from Natural Language Requirements Specification",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName: "",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName:
      "MONITORING OF TRAFFIC USING UNMANNED AERIAL VEHICLE IN MALAYSIA LANDSCAPE PERSPECTIVE",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName:
      "TEST CASE SELECTION USING MUTATIONS ANALYSIS FOR TEST CASE EFFECTIVENESS",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName:
      "Toward IoT Based Pollution Detection System for Indoor and Outdoor Environment",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName:
      "An Effective Method for Software Development Effort Estimation for Complex Project Management",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName:
      "An Effective Method for Software Development Effort Estimation for Complex Project Management",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName:
      "Functional Requirements Management in Virtual Team Environment",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName:
      "Content-Based Venue Recommender Approach for Publication",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName: "CMMI Software Evolution and Its Role in Pakistan",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName:
      "CVehicle Recognition using Multi-level DeepLearning Models",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "International Conference on Computer Science and Intelligent Systems (ICCSIS)",
    conferenceTopicName:
      "Big Data Analysis of Contagious Diseases Using AI-based Surveillance System",
    conferenceSortName: "ICCSIS 2025",
    event: "ICCSIS 2025",
    date: "2024",
    role: "Conference Peer Review",
  },
  {
    conferenceName:
      "Global Conference on Information Technologies and Communications",
    conferenceTopicName:
      "Revolutionizing Covid-19 Pneumonia Detection With Convolutional Neural Networks",
    conferenceSortName: "GCITC 2024",
    event: "GCITC 2024",
    date: "2024",
    role: "Conference Peer Review",
  },
];

export const judgeSessionChair = [
  {
    conferenceName:
      "INTERNATIONAL CONFERENCE ON ADVANCED DATA ANALYTICS AND COMPUTING",
    conferenceSortName: "ICADAC 2025",
    event: "ICADAC 2025",
    date: "2025",
    role: "Conference Session Chair",
  },
  {
    conferenceName: "HUMANIZE AI TEXT",
    conferenceSortName: "HACKATHON 2024",
    event: "HACKATHON 2024",
    date: "2024",
    role: "HACKATHON JUDGE",
  },
];
export const judgeBookChap = [
  {
    publisherName: "IGI Global",
    bookTopicName:
      "Metaheuristic Algorithms and Optimizing Neural Networks for Biomedical Image Processing",
    conferenceSortName: "IGI Global 2025",
    event: "IGI Global",
    date: "9 April 2025",
    role: "Book Chapter Peer Review",
  },
  {
    publisherName: "IGI Global",
    bookTopicName: "TRANSFORMERS FOR MEDICAL IMAGE SEGMENTATION",
    conferenceSortName: "IGI Global 2025",
    event: "IGI Global",
    date: "10 April 2025",
    role: "Book Chapter Peer Review",
  },
  {
    publisherName: "IGI Global",
    bookTopicName:
      "Deep Learning-Enhanced Hybrid Metaheuristic Fusion Model for Biomedical Image Analysis",
    conferenceSortName: "IGI Global 2025",
    event: "IGI Global",
    date: "9 April 2025",
    role: "Book Chapter Peer Review",
  },
  {
    publisherName: "IGI Global",
    bookTopicName: "Metaheuristics in Deep Learning for 3D Medical Imaging",
    conferenceSortName: "IGI Global 2025",
    event: "IGI Global",
    date: "9 April 2025",
    role: "Book Chapter Peer Review",
  },
  {
    publisherName: "IGI Global",
    bookTopicName:
      "Transformers Technologies in Measuring Healthcare with Digital Technologies",
    conferenceSortName: "IGI Global 2025",
    event: "IGI Global",
    date: "9 April 2025",
    role: "Book Chapter Peer Review",
  },
  {
    publisherName: "IGI Global",
    bookTopicName:
      "Comparative Analysis of Simulated Annealing and Genetic Algorithm for Network Optimization",
    conferenceSortName: "IGI Global 2025",
    event: "IGI Global",
    date: "3 April 2025",
    role: "Book Chapter Peer Review",
  },
];

export const judgeGithub = [
  {
    repoName: "Data_Science_Projects",
    issue: "Update Telecom_Customer_Churn.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/52",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/52/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/52/files",
    mergeDate: "21 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update heart_disease_classification.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/51",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/51/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/51/files",
    mergeDate: "21 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update real_state.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/50",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/50/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/50/files",
    mergeDate: "21 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update iris_classification.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/49",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/49/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/49/files",
    mergeDate: "21 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update axis_bank_stock_price_prediction.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/38",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/38/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/38/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update weather.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/35",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/35/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/35/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update linear_regression.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/34",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/34/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/34/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update house_price.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/33",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/33/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/33/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update asia_cup.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/32",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/32/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/32/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update yt.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/22",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/22/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/22/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update virtual_mouse.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/21",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/21/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/21/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update speech_recognition.py",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/20",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/20/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/20/files",
    mergeDate: "20 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Create CODE_OF_CONDUCT.md",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/7",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/7/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/7/files",
    mergeDate: "16 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update README.md",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/4",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/4/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/4/files",
    mergeDate: "16 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Update CONTRIBUTING.md",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/15",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/15/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/15/files",
    mergeDate: "15 OCT 2024",
    date: "2024",
  },
  {
    repoName: "Data_Science_Projects",
    issue: "Create CONTRIBUTING.md",
    conversationLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/1",
    commitsLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/1/commits",
    filesLink:
      "https://github.com/Mubashir-Ul-Hassan/Data_Science_Projects/pull/1/files",
    mergeDate: "15 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Video Classification Model Using CNN and LSTM.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/38",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/38/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/38/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Chatbot Using Seq2Seq.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/36",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/36/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/36/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Image Captioning Model Using CNN and LSTM.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/35",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/35/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/35/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Language Translation Model Using Seq2Seq.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/34",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/34/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/34/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Handwritten Digit Recognition Model Using CNN.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/33",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/33/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/33/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Sentiment Analysis Model Using LSTM.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/32",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/32/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/32/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Text Summarization.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/31",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/31/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/31/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Image Classifier Using CNN.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/30",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/30/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/30/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Text Summarization Using Seq2Seq.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/29",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/29/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/29/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
  {
    repoName: "ai-projects",
    issue: "Create Image Classification.py",
    conversationLink: "https://github.com/FakhirK90/ai-projects/pull/28",
    commitsLink: "https://github.com/FakhirK90/ai-projects/pull/28/commits",
    filesLink: "https://github.com/FakhirK90/ai-projects/pull/28/files",
    mergeDate: "24 OCT 2024",
    date: "2024",
  },
];

export const badges = [
  {
    badgeName: "Early Bird Pegasaurus",
    fest: "",
    badgeDes: "Holopin",
    badgeUrl:
      "https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDd0ZDhncDUwMTMyMDlrMHd1OHFlNHg5IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=",
  },
  {
    badgeName: "Hacktoberfest 2024: Registered",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level0-sloth-code-0-0-0-0.webp",
  },
  {
    badgeName: "Hacktoberfest 2024: Level 1",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level1-sloth-code-0-0-0-0.webp",
  },
  {
    badgeName: "Hacktoberfest 2024: Level 2",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level2-sloth-code-0-0-0-0.webp",
  },
  {
    badgeName: "Hacktoberfest 2024: Level 3",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level3-sloth-code-0-0-0-0.webp",
  },
  {
    badgeName: "Hacktoberfest 2024: Level 4",
    fest: "October 2024",
    badgeDes: "Hacktoberfest",
    badgeUrl:
      "https://assets.holopin.io/hf2024levels/level4-sloth-code-0-0-0-0.webp",
  },
];

export const keyNoteData = [
  {
    image: "/ny-black.webp",
    conferenceName: "IEEE CN Smart Cities Austin Texas USA",
    publisher: "IEEE",
    shortName: "IEEE CN Smart Cities Austin Texas USA",
    date: "2024",
    link: "https://events.vtools.ieee.org/m/430011/",
    mediaLink:
      "https://nyweekly.com/tech/rahul-vadisetty-and-anand-polamarasetti-smart-city-development",
  },
  {
    image: "/esp.png",
    conferenceName: "ICICCS- 2024",
    publisher: "Eternal Scientific Publication",
    shortName: "Eternal Scientific Publication",
    date: "2024",
    link: "https://www.espjournals.org/",
    mediaLink:
      "https://www.espjournals.org/International_Conference_ICICCS.php",
  },
];
