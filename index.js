import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors())
const port = 3000;


const blogPosts = [
  {
    "uid": "UID001",
    "title": "AI Trends and Innovations #1",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 1",
    "date": "2026-05-23",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/data-science-1/800/400"
  },
  {
    "uid": "UID002",
    "title": "Data Science Trends and Innovations #2",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 2",
    "date": "2026-05-22",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/analytics-2/800/400"
  },
  {
    "uid": "UID003",
    "title": "Machine Learning Trends and Innovations #3",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 3",
    "date": "2026-05-21",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-3/800/400"
  },
  {
    "uid": "UID004",
    "title": "Data Science Trends and Innovations #4",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 4",
    "date": "2026-05-20",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/analytics-4/800/400"
  },
  {
    "uid": "UID005",
    "title": "Data Science Trends and Innovations #5",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 5",
    "date": "2026-05-19",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/software-development-5/800/400"
  },
  {
    "uid": "UID006",
    "title": "Technology Trends and Innovations #6",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 6",
    "date": "2026-05-18",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cybersecurity-6/800/400"
  },
  {
    "uid": "UID007",
    "title": "Machine Learning Trends and Innovations #7",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 7",
    "date": "2026-05-17",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/analytics-7/800/400"
  },
  {
    "uid": "UID008",
    "title": "AI Trends and Innovations #8",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 8",
    "date": "2026-05-16",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-8/800/400"
  },
  {
    "uid": "UID009",
    "title": "Machine Learning Trends and Innovations #9",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 9",
    "date": "2026-05-15",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/analytics-9/800/400"
  },
  {
    "uid": "UID010",
    "title": "Data Analytics Trends and Innovations #10",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 10",
    "date": "2026-05-14",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/machine-learning-10/800/400"
  },
  {
    "uid": "UID011",
    "title": "Machine Learning Trends and Innovations #11",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 11",
    "date": "2026-05-13",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cybersecurity-11/800/400"
  },
  {
    "uid": "UID012",
    "title": "Technology Trends and Innovations #12",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 12",
    "date": "2026-05-12",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-12/800/400"
  },
  {
    "uid": "UID013",
    "title": "Technology Trends and Innovations #13",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 13",
    "date": "2026-05-11",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cloud-computing-13/800/400"
  },
  {
    "uid": "UID014",
    "title": "Data Analytics Trends and Innovations #14",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 14",
    "date": "2026-05-10",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/big-data-14/800/400"
  },
  {
    "uid": "UID015",
    "title": "Machine Learning Trends and Innovations #15",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 15",
    "date": "2026-05-09",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-15/800/400"
  },
  {
    "uid": "UID016",
    "title": "Data Analytics Trends and Innovations #16",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 16",
    "date": "2026-05-08",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/automation-16/800/400"
  },
  {
    "uid": "UID017",
    "title": "Data Science Trends and Innovations #17",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 17",
    "date": "2026-05-07",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cybersecurity-17/800/400"
  },
  {
    "uid": "UID018",
    "title": "Machine Learning Trends and Innovations #18",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 18",
    "date": "2026-05-06",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/technology-18/800/400"
  },
  {
    "uid": "UID019",
    "title": "Machine Learning Trends and Innovations #19",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 19",
    "date": "2026-05-05",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/analytics-19/800/400"
  },
  {
    "uid": "UID020",
    "title": "Technology Trends and Innovations #20",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 20",
    "date": "2026-05-04",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cybersecurity-20/800/400"
  },
  {
    "uid": "UID021",
    "title": "Technology Trends and Innovations #21",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 21",
    "date": "2026-05-03",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/big-data-21/800/400"
  },
  {
    "uid": "UID022",
    "title": "Machine Learning Trends and Innovations #22",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 22",
    "date": "2026-05-02",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/automation-22/800/400"
  },
  {
    "uid": "UID023",
    "title": "Data Science Trends and Innovations #23",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 23",
    "date": "2026-05-01",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cybersecurity-23/800/400"
  },
  {
    "uid": "UID024",
    "title": "Technology Trends and Innovations #24",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 24",
    "date": "2026-04-30",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/technology-24/800/400"
  },
  {
    "uid": "UID025",
    "title": "Data Science Trends and Innovations #25",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 25",
    "date": "2026-04-29",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/software-development-25/800/400"
  },
  {
    "uid": "UID026",
    "title": "Data Science Trends and Innovations #26",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 26",
    "date": "2026-04-28",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/big-data-26/800/400"
  },
  {
    "uid": "UID027",
    "title": "Data Science Trends and Innovations #27",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 27",
    "date": "2026-04-27",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/big-data-27/800/400"
  },
  {
    "uid": "UID028",
    "title": "AI Trends and Innovations #28",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 28",
    "date": "2026-04-26",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/technology-28/800/400"
  },
  {
    "uid": "UID029",
    "title": "Data Science Trends and Innovations #29",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 29",
    "date": "2026-04-25",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cloud-computing-29/800/400"
  },
  {
    "uid": "UID030",
    "title": "Technology Trends and Innovations #30",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 30",
    "date": "2026-04-24",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/data-science-30/800/400"
  },
  {
    "uid": "UID031",
    "title": "Technology Trends and Innovations #31",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 31",
    "date": "2026-04-23",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cloud-computing-31/800/400"
  },
  {
    "uid": "UID032",
    "title": "Technology Trends and Innovations #32",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 32",
    "date": "2026-04-22",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/data-science-32/800/400"
  },
  {
    "uid": "UID033",
    "title": "AI Trends and Innovations #33",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 33",
    "date": "2026-04-21",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/analytics-33/800/400"
  },
  {
    "uid": "UID034",
    "title": "Data Analytics Trends and Innovations #34",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 34",
    "date": "2026-04-20",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/machine-learning-34/800/400"
  },
  {
    "uid": "UID035",
    "title": "Data Science Trends and Innovations #35",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 35",
    "date": "2026-04-19",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-35/800/400"
  },
  {
    "uid": "UID036",
    "title": "Technology Trends and Innovations #36",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 36",
    "date": "2026-04-18",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/automation-36/800/400"
  },
  {
    "uid": "UID037",
    "title": "Data Science Trends and Innovations #37",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 37",
    "date": "2026-04-17",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/technology-37/800/400"
  },
  {
    "uid": "UID038",
    "title": "Data Science Trends and Innovations #38",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 38",
    "date": "2026-04-16",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/automation-38/800/400"
  },
  {
    "uid": "UID039",
    "title": "Data Science Trends and Innovations #39",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 39",
    "date": "2026-04-15",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-39/800/400"
  },
  {
    "uid": "UID040",
    "title": "Data Science Trends and Innovations #40",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 40",
    "date": "2026-04-14",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-40/800/400"
  },
  {
    "uid": "UID041",
    "title": "Data Analytics Trends and Innovations #41",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 41",
    "date": "2026-04-13",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/big-data-41/800/400"
  },
  {
    "uid": "UID042",
    "title": "Technology Trends and Innovations #42",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 42",
    "date": "2026-04-12",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cybersecurity-42/800/400"
  },
  {
    "uid": "UID043",
    "title": "AI Trends and Innovations #43",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 43",
    "date": "2026-04-11",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/software-development-43/800/400"
  },
  {
    "uid": "UID044",
    "title": "Technology Trends and Innovations #44",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 44",
    "date": "2026-04-10",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cybersecurity-44/800/400"
  },
  {
    "uid": "UID045",
    "title": "Data Analytics Trends and Innovations #45",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 45",
    "date": "2026-04-09",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cybersecurity-45/800/400"
  },
  {
    "uid": "UID046",
    "title": "Technology Trends and Innovations #46",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 46",
    "date": "2026-04-08",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/big-data-46/800/400"
  },
  {
    "uid": "UID047",
    "title": "Data Science Trends and Innovations #47",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 47",
    "date": "2026-04-07",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/technology-47/800/400"
  },
  {
    "uid": "UID048",
    "title": "Data Analytics Trends and Innovations #48",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 48",
    "date": "2026-04-06",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/machine-learning-48/800/400"
  },
  {
    "uid": "UID049",
    "title": "Data Science Trends and Innovations #49",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 49",
    "date": "2026-04-05",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/software-development-49/800/400"
  },
  {
    "uid": "UID050",
    "title": "Technology Trends and Innovations #50",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 50",
    "date": "2026-04-04",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-50/800/400"
  },
  {
    "uid": "UID051",
    "title": "AI Trends and Innovations #51",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 51",
    "date": "2026-04-03",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/technology-51/800/400"
  },
  {
    "uid": "UID052",
    "title": "Technology Trends and Innovations #52",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 52",
    "date": "2026-04-02",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/analytics-52/800/400"
  },
  {
    "uid": "UID053",
    "title": "Data Science Trends and Innovations #53",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 53",
    "date": "2026-04-01",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/technology-53/800/400"
  },
  {
    "uid": "UID054",
    "title": "Machine Learning Trends and Innovations #54",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 54",
    "date": "2026-03-31",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/big-data-54/800/400"
  },
  {
    "uid": "UID055",
    "title": "Machine Learning Trends and Innovations #55",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 55",
    "date": "2026-03-30",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/analytics-55/800/400"
  },
  {
    "uid": "UID056",
    "title": "AI Trends and Innovations #56",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 56",
    "date": "2026-03-29",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-56/800/400"
  },
  {
    "uid": "UID057",
    "title": "Machine Learning Trends and Innovations #57",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 57",
    "date": "2026-03-28",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-57/800/400"
  },
  {
    "uid": "UID058",
    "title": "AI Trends and Innovations #58",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 58",
    "date": "2026-03-27",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-58/800/400"
  },
  {
    "uid": "UID059",
    "title": "Machine Learning Trends and Innovations #59",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 59",
    "date": "2026-03-26",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/technology-59/800/400"
  },
  {
    "uid": "UID060",
    "title": "AI Trends and Innovations #60",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 60",
    "date": "2026-03-25",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/big-data-60/800/400"
  },
  {
    "uid": "UID061",
    "title": "Data Analytics Trends and Innovations #61",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 61",
    "date": "2026-03-24",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-61/800/400"
  },
  {
    "uid": "UID062",
    "title": "Data Analytics Trends and Innovations #62",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 62",
    "date": "2026-03-23",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/software-development-62/800/400"
  },
  {
    "uid": "UID063",
    "title": "Data Analytics Trends and Innovations #63",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 63",
    "date": "2026-03-22",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-63/800/400"
  },
  {
    "uid": "UID064",
    "title": "Machine Learning Trends and Innovations #64",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 64",
    "date": "2026-03-21",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cybersecurity-64/800/400"
  },
  {
    "uid": "UID065",
    "title": "Data Science Trends and Innovations #65",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 65",
    "date": "2026-03-20",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-65/800/400"
  },
  {
    "uid": "UID066",
    "title": "Data Analytics Trends and Innovations #66",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 66",
    "date": "2026-03-19",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cybersecurity-66/800/400"
  },
  {
    "uid": "UID067",
    "title": "Data Analytics Trends and Innovations #67",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 67",
    "date": "2026-03-18",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/analytics-67/800/400"
  },
  {
    "uid": "UID068",
    "title": "Technology Trends and Innovations #68",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 68",
    "date": "2026-03-17",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/technology-68/800/400"
  },
  {
    "uid": "UID069",
    "title": "Machine Learning Trends and Innovations #69",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 69",
    "date": "2026-03-16",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/automation-69/800/400"
  },
  {
    "uid": "UID070",
    "title": "Technology Trends and Innovations #70",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 70",
    "date": "2026-03-15",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-70/800/400"
  },
  {
    "uid": "UID071",
    "title": "Data Science Trends and Innovations #71",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 71",
    "date": "2026-03-14",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cloud-computing-71/800/400"
  },
  {
    "uid": "UID072",
    "title": "AI Trends and Innovations #72",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 72",
    "date": "2026-03-13",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/automation-72/800/400"
  },
  {
    "uid": "UID073",
    "title": "Machine Learning Trends and Innovations #73",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 73",
    "date": "2026-03-12",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/automation-73/800/400"
  },
  {
    "uid": "UID074",
    "title": "Machine Learning Trends and Innovations #74",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 74",
    "date": "2026-03-11",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/machine-learning-74/800/400"
  },
  {
    "uid": "UID075",
    "title": "Data Analytics Trends and Innovations #75",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 75",
    "date": "2026-03-10",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/software-development-75/800/400"
  },
  {
    "uid": "UID076",
    "title": "Technology Trends and Innovations #76",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 76",
    "date": "2026-03-09",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/machine-learning-76/800/400"
  },
  {
    "uid": "UID077",
    "title": "AI Trends and Innovations #77",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 77",
    "date": "2026-03-08",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-77/800/400"
  },
  {
    "uid": "UID078",
    "title": "Technology Trends and Innovations #78",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 78",
    "date": "2026-03-07",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cybersecurity-78/800/400"
  },
  {
    "uid": "UID079",
    "title": "Data Science Trends and Innovations #79",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 79",
    "date": "2026-03-06",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cloud-computing-79/800/400"
  },
  {
    "uid": "UID080",
    "title": "Technology Trends and Innovations #80",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 80",
    "date": "2026-03-05",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-80/800/400"
  },
  {
    "uid": "UID081",
    "title": "Data Science Trends and Innovations #81",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 81",
    "date": "2026-03-04",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/analytics-81/800/400"
  },
  {
    "uid": "UID082",
    "title": "Technology Trends and Innovations #82",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 82",
    "date": "2026-03-03",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-82/800/400"
  },
  {
    "uid": "UID083",
    "title": "Machine Learning Trends and Innovations #83",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 83",
    "date": "2026-03-02",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/big-data-83/800/400"
  },
  {
    "uid": "UID084",
    "title": "Technology Trends and Innovations #84",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 84",
    "date": "2026-03-01",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/technology-84/800/400"
  },
  {
    "uid": "UID085",
    "title": "Technology Trends and Innovations #85",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 85",
    "date": "2026-02-28",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/analytics-85/800/400"
  },
  {
    "uid": "UID086",
    "title": "Technology Trends and Innovations #86",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 86",
    "date": "2026-02-27",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/automation-86/800/400"
  },
  {
    "uid": "UID087",
    "title": "Technology Trends and Innovations #87",
    "paragraph": "This blog explores emerging trends in Technology, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 87",
    "date": "2026-02-26",
    "domain": "Technology",
    "tags": [
      "Technology",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cloud-computing-87/800/400"
  },
  {
    "uid": "UID088",
    "title": "AI Trends and Innovations #88",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 88",
    "date": "2026-02-25",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/machine-learning-88/800/400"
  },
  {
    "uid": "UID089",
    "title": "AI Trends and Innovations #89",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 89",
    "date": "2026-02-24",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/automation-89/800/400"
  },
  {
    "uid": "UID090",
    "title": "Data Analytics Trends and Innovations #90",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 90",
    "date": "2026-02-23",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/big-data-90/800/400"
  },
  {
    "uid": "UID091",
    "title": "Data Analytics Trends and Innovations #91",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 91",
    "date": "2026-02-22",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/technology-91/800/400"
  },
  {
    "uid": "UID092",
    "title": "Machine Learning Trends and Innovations #92",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 92",
    "date": "2026-02-21",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/technology-92/800/400"
  },
  {
    "uid": "UID093",
    "title": "Data Science Trends and Innovations #93",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 93",
    "date": "2026-02-20",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/automation-93/800/400"
  },
  {
    "uid": "UID094",
    "title": "Data Science Trends and Innovations #94",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 94",
    "date": "2026-02-19",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/analytics-94/800/400"
  },
  {
    "uid": "UID095",
    "title": "Machine Learning Trends and Innovations #95",
    "paragraph": "This blog explores emerging trends in Machine Learning, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 95",
    "date": "2026-02-18",
    "domain": "Machine Learning",
    "tags": [
      "MachineLearning",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cloud-computing-95/800/400"
  },
  {
    "uid": "UID096",
    "title": "AI Trends and Innovations #96",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 96",
    "date": "2026-02-17",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cloud-computing-96/800/400"
  },
  {
    "uid": "UID097",
    "title": "Data Science Trends and Innovations #97",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 97",
    "date": "2026-02-16",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/artificial-intelligence-97/800/400"
  },
  {
    "uid": "UID098",
    "title": "AI Trends and Innovations #98",
    "paragraph": "This blog explores emerging trends in AI, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 98",
    "date": "2026-02-15",
    "domain": "AI",
    "tags": [
      "AI",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/cybersecurity-98/800/400"
  },
  {
    "uid": "UID099",
    "title": "Data Science Trends and Innovations #99",
    "paragraph": "This blog explores emerging trends in Data Science, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 99",
    "date": "2026-02-14",
    "domain": "Data Science",
    "tags": [
      "DataScience",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/machine-learning-99/800/400"
  },
  {
    "uid": "UID100",
    "title": "Data Analytics Trends and Innovations #100",
    "paragraph": "This blog explores emerging trends in Data Analytics, discussing practical applications, future opportunities, challenges, and how businesses are adapting to rapidly changing technologies in 2026.",
    "author": "Author 100",
    "date": "2026-02-13",
    "domain": "Data Analytics",
    "tags": [
      "DataAnalytics",
      "Tech",
      "Innovation"
    ],
    "img_url": "https://picsum.photos/seed/big-data-100/800/400"
  }
]

// Get all posts
app.get('/posts', (req, res)=>{
    res.json(blogPosts);
})


// Get specific post by ID
app.get('/posts/:id', (req, res)=>{
    const id = req.params.id;
    const matchPost = blogPosts.filter(obj => obj.uid == id);
    res.json(matchPost);
})

app.listen(port, ()=>{
    console.log(`SERVER IS RUNNING AT localhost:${port}`);
})
