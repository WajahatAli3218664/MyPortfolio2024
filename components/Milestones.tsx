import React from "react";
import styled from "styled-components";


interface CardProps {
  title: string;
  description: string; 
  date: string;
  categories: string[];
  author: string;
}

// Card component
const Card: React.FC<CardProps> = ({
  title,
  description,
  date,
  categories,
  author,
}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="main-content">
          <div className="header">
            <span>Next Js Journey Learning Projects </span>
            <span>{date}</span>
          </div>
          <p className="heading">{title}</p>
          <p className="description">{description}</p>{" "}
          {/* Added description display */}
          <div className="categories">
            {categories.map((category, index) => (
              <span key={index}>{category}</span>
            ))}
          </div>
        </div>
        <div className="footer">Work Status : {author}</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 320px;
    height: 350px;
    padding: 20px;
    color: white;
    background: linear-gradient(#10002b, #0d1b2a) padding-box,
      linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transform-origin: right bottom;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    transform: rotate(0deg); /* Initial rotation */
  }

  .card .main-content {
    flex: 1;
  }

  .card .header span:first-child {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
  }

  .card .heading {
    font-size: 24px;
    margin: 24px 0 8px; /* Adjusted margin */
    font-weight: 600;
    color: cyan;
  }

  .card .description {
    font-size: 14px; /* Styling for description */
    margin-top: 16px;
    margin-bottom: 16px; /* Adjusted margin */
    color: #e0e0e0; /* Optional color for description */
  }

  .card .categories {
    display: flex;
    gap: 8px;
  }

  .card .categories span {
    background-color: #5a189a;
    padding: 4px 8px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 50em;
  }

  .card .footer {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
  }

  .card:hover {
    transform: rotate(8deg); /* Rotation on hover */
  }
`;

// structure of articles
interface Article {
  title: string;
  date: string;
  description: string; 
  categories: string[];
  author: string;
}

// CardList component
const CardList: React.FC = () => {
  const articles: Article[] = [
    {
      title: "Installation & Hello World 🚀",
      date: "Milestone 1",
      description:
        'Installed Node.js, set up a Next.js project, and launched a basic "Hello World" app my first step into the world of Next.js',
      categories: ["React", "Next.js", "Node.js"],
      author: "Complete On 5-September-2024",
    },
    {
      title: "Basic UI Design & Tailwind CSS 🎨",
      date: "Milestone 2",
      description:
        "Designed reusable components like navbars, made my layout responsive, & created portfolio website",
      categories: ["React", "Tailwindcss"],
      author: "Complete On 10-October-2024",
    },
    {
      title: "Front-End & Next.js Components ⚛️",
      date: "Milestone 3",
      description:
        "Developed a dynamic blog with Next.js routing and a comments section using React state",
      categories: ["Next.js", "API Routes"],
      author: "Complete On 28-October-2024",
    },
    {
      title: "Advanced Concepts in Next.js 🛠️",
      date: "Milestone 4",
      description:
        "Created a fully functional blog platform that includes user authentication, leveraging SSR/SSG to fetch data",
      categories: ["Next.js", "API", "JSON Web Tokens"],
      author: "In Progress",
    },
    {
      title: "Capstone Project 🌟",
      date: "Milestone 5",
      description:
        "Working on a capstone project that showcases everything learned in the course.",
      categories: ["Web Development", "Third-party APIs"],
      author: "Not Started Yet",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {articles.map((article, index) => (
        <Card
          key={index}
          title={article.title}
          description={article.description} // Passing description to Card
          date={article.date}
          categories={article.categories}
          author={article.author}
        />
      ))}
    </div>
  );
};

// Main App component
const App: React.FC = () => {
  return (
    <div>
      <br />
      <br />
      <h1 className="text-center text-3xl font-bold mb-8 text-white">
        A Journey of Discovery: Learning Next.js at Governor House
      </h1>

      <CardList />
    </div>
  );
};

export default App;
