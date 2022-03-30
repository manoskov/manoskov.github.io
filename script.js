/* Naming Constants for IDs */

const projectName = document.getElementById('project-name');

const projectDescription = document.getElementById('project-description');

const projectScreenshot = document.getElementById('project-screenshot');

const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
const buttonFour = document.getElementById('button-four');


/* Gallery functions */

const projects = {
    project1: { 
        name: 'Fotomatic', 
        description: '<p>Learning project for Codecademy</p> <p>HTML + CSS</p> <p>Adaprive, uses flexbox</p>',
        screenshotUrl: './portfolio/001.jpg'
      },
      project2: { 
        name: 'Tea Cozy', 
        description: '<p>Another learning project: building a site using a design spec</p> <p>HTML + CSS</p> <p>Flexbox</p>',
        screenshotUrl: './portfolio/002.jpg'
      },
      project3: { 
        name: 'Number Guesser', 
        description: '<p>Simple JS game. You compete against the computer. Whoever guesses better, wins</p> <p>HTML + CSS + JS</p>',
        screenshotUrl: './portfolio/003.jpg'},
      project4: {
        name: 'Musica Linguae', 
        description: '<p>Responsive design with @media queries</p> <p>HTML + CSS</p>', 
        screenshotUrl: './portfolio/004.jpg'}
};

/*

let projectNumber = 1;

function showProject(num) {
    projectNumber = num;
    if (projectNumber === 1) {
        projectName.innerHTML = projects.project1.name;
        projectDescription.innerHTML = projects.project1.description;
        projectScreenshot.src = projects.project1.screenshotUrl;
    } if (projectNumber === 2) {
        projectName.innerHTML = projects.project2.name;
        projectDescription.innerHTML = projects.project2.description;
        projectScreenshot.src = projects.project2.screenshotUrl;
    } if (projectNumber === 3) {
        projectName.innerHTML = projects.project3.name;
        projectDescription.innerHTML = projects.project3.description;
        projectScreenshot.src = projects.project3.screenshotUrl;
    } if (projectNumber === 4) {
        projectName.innerHTML = projects.project4.name;
        projectDescription.innerHTML = projects.project4.description;
        projectScreenshot.src = projects.project4.screenshotUrl;
    } if (projectNumber === false) {
        projectName.innerHTML = projects.project1.name;
        projectDescription.innerHTML = projects.project1.description;
        projectScreenshot.src = projects.project1.screenshotUrl;
    }
}; 


buttonOne.onclick = showProject(1);

buttonTwo.onclick = showProject(2);

buttonThree.onclick = showProject(3);

buttonFour.onclick = showProject(4);

*/


function showProjectOne () {
    projectName.innerHTML = projects.project1.name;
    projectDescription.innerHTML = projects.project1.description;
    projectScreenshot.src = projects.project1.screenshotUrl;
};

buttonOne.onclick = showProjectOne;


function showProjectTwo () {
    projectName.innerHTML = projects.project2.name;
    projectDescription.innerHTML = projects.project2.description;
    projectScreenshot.src = projects.project2.screenshotUrl;
};

buttonTwo.onclick = showProjectTwo;

function showProjectThree () {
    projectName.innerHTML = projects.project3.name;
    projectDescription.innerHTML = projects.project3.description;
    projectScreenshot.src = projects.project3.screenshotUrl;
};

buttonThree.onclick = showProjectThree;

function showProjectFour () {
    projectName.innerHTML = projects.project4.name;
    projectDescription.innerHTML = projects.project4.description;
    projectScreenshot.src = projects.project4.screenshotUrl;
};

buttonFour.onclick = showProjectFour;