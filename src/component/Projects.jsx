import './css_file/Projects.css'; 
import { useState } from 'react';  

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'Weather App',
      imageUrl: './images/weather.png',
      projectUrl: 'http://weather-app-eta-green-59.vercel.app', 
      description: 'A weather app that provides real-time weather information, forecasts, and alerts.'
    },
    {
      id: 2,
      title: 'Image-Finder',
      imageUrl: './images/Search_Img.png', 
      projectUrl: 'https://search-img-xi.vercel.app/', 
      description: 'An image finder web tool that helps users search for images using keywords or by uploading an image.'
    },
    {
      id: 3,
      title: 'Github Profile Finder',
      imageUrl: './images/githubprofileviewer.png', 
      projectUrl: 'https://github-profile-viewer-ochre.vercel.app/', 
      description: 'A GitHub Profile Viewer allows users to view the public information of a GitHub user or developer.'
    },
    {
      id: 4,
      title: 'TicTacToe',
      imageUrl: './images/tic-tac-toe.png', 
      projectUrl: 'https://tic-tac-toe-yuvraj-yadavs-projects-6e99a305.vercel.app/', 
      description: 'Tic-Tac-Toe is a simple two-player game where players take turns marking spaces on a 3x3 grid with either an "X" or an "O." '
    },
    {
      id: 5,
      title: 'Calculator',
      imageUrl: './images/calculator.png', 
      projectUrl: 'https://yrj-calculator-yuvraj-yadavs-projects-6e99a305.vercel.app/', 
      description: 'This is a React-based Calculator App that allows users to perform basic arithmetic operations, including addition, subtraction, multiplication, and division." '
    },
    {
      id: 6,
      title: 'Password Generator',
      imageUrl: './images/passWordGenerator.png', 
      projectUrl: 'https://password-generator-yuvraj-yadavs-projects-6e99a305.vercel.app/', 
      description: 'A password generator is a tool or software designed to create strong, random passwords that are difficult for attackers to guess.'
    },
    {
      id: 7,
      title: 'Note App',
      imageUrl: './images/note.png', 
      projectUrl: 'https://my-notes-alpha-three.vercel.app/', 
      description: 'This is a quick summary of important information. You can add tasks, reminders, ideas, or key points here. '
    },
    {
      id: 8,
      title: 'Emoji Generator',
      imageUrl: './images/Emoji_Gene.png', 
      projectUrl: 'https://emoji-generator-puce.vercel.app/', 
      description: 'The app randomly selects an emoji from a list fetched from the API and displays it on the screen.'
    },
    {
      id: 9,
      title: 'Currency Converter',
      imageUrl: './images/currency-converter.png', 
      projectUrl: 'https://currency-converter-yuvraj-yadavs-projects-6e99a305.vercel.app/', 
      description: 'This app is a Currency Converter built with React that allows users to convert an amount from one currency to another.'
    },
    {
      id: 10,
      title: 'Digital Clock',
      imageUrl: './images/clock.png',
      projectUrl: 'https://digital-clock-yuvraj-yadavs-projects-6e99a305.vercel.app/',
      description: 'This app is a digital clock built with React that displays the current time in a sleek and modern design.'
    },
    {
      id: 11,
      title: 'Country Info',
      imageUrl: './images/country-info.png',
      projectUrl: 'https://country-info-git-master-yuvraj-yadavs-projects-6e99a305.vercel.app/',
      description: 'This React app allows users to search for a country capital and currency by entering the country name.'
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <section className="projects-section">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-image-container">
                <div className="image-slider">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="project-image"
                    onClick={() => openModal(project.imageUrl)}
                  />
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.id }.{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Project Preview" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
