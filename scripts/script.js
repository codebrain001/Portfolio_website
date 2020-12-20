// Mobile navigation toggle button
let nav_interative = () => {
let burger = document.querySelector('.burger');
let nav = document.querySelector('.menu');
let navBar = document.querySelector('nav');
let menuLinks = document.querySelectorAll('.menu li');

// Toggle Menu
burger.addEventListener('click', () => {
    nav.classList.toggle('menu-active');

    // Fixed the body section 
    document.querySelector('body').classList.toggle('body-fixed');
   
    // Remove the blur on the navigation bar (Mobile)
    navBar.classList.toggle('remove-blur');

    // Add the blur on the navigation bar (Mobile)
    nav.classList.toggle('add-blur');

    // Animate Links
    menuLinks.forEach((link, index)=>{
        if (link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `linkFade 0.5s ease forwards ${index/7 +2}s`;
        }
        });
        // Burger toggle
        burger.classList.toggle('toggle');

    
})

}

nav_interative();



//Landing Page animination 
// let textWrapper = document.querySelector('#skills');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '#skills .letter',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 2250,
//     delay: (el, i) => 150 * (i+1)
//   }).add({
//     targets: '#skills',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });


// function content1(){
//     let codeBlock = '<div class="content">' +
//                     '<h1>Data Scientist and Analyst</h1>' +
//                     '<h2>September 2019 - Present</h2>' +
//                     '<ul>' +
//                         '<li>Research and Development that will support DSN knowledge leadership and project.</li>' +
//                         '<li>Full responsibility for Quality assurance on the data collected.</li>' +
//                         '<li>Leadership participation in the crowdsourced-based enumeration and observational research.</li>' +
//                         '<li>Research, writing and presentation of research and white papers on cutting edge spatial data science, data science, machine learning and deep learining projects.</li>' +
//                         '<li>Execute community building strategies and deliver stellar community engagements.</li>' +
//                     '</ul>' +
//                     '</div>'
//     // Inserting the code block to wrapper element
//     document.getElementById("exp-content").innerHTML = codeBlock
// }

// function content2(){
//     let codeBlock = '<div>' +
//                     '<h1>Data Science Teaching Assistant</h1>' +
//                     '<h2>July 2020 - September 2020</h2>' +
//                     '<ul>' +
//                         '<li>Aiding learners in developing a deeper understanding of concepts in data science.</li>' +
//                         '<li>Leading weekly workshops.</li>' +
//                         '<li>Reviewing assignments and preparing study plans.</li>' +
//                     '</ul>' +
//                     '</div>'

//     // Inserting the code block to wrapper element
//     document.getElementById("exp-content").innerHTML = codeBlock
// }

// function content3(){
//     let codeBlock = '<div>' +
//                     '<h1> Learning Facilitator</h1>' +
//                     '<h2> October 2020 - Present</h2>' +
//                     '<ul>' +
//                         '<li>Help others utilize their own knowledge and abilities to achieve their learning objectives.</li>' +
//                         '<li>Guide students through the learning process, assisting them at their own pace.</li>' +
//                     '</ul>' +
//                     '</div>'

//     // Inserting the code block to wrapper element
//     document.getElementById("exp-content").innerHTML = codeBlock
// }


// function content4(){
//     let codeBlock = '<div>' +
//                     '<h1> Learning Facilitator</h1>' +
//                     '<h2> September 2018 - Present</h2>' +
//                     '<ul>' +
//                         '<li>Help others utilize their own knowledge and abilities to achieve their learning objectives.</li>' +
//                         '<li>Guide students through the learning process, assisting them at their own pace.</li>' +
//                     '</ul>' +
//                     '</div>'

//     // Inserting the code block to wrapper element
//     document.getElementById("exp-content").innerHTML = codeBlock
// }

// function content5(){
//     let codeBlock = '<div>' +
//                     '<h1>Contributing Writer</h1>' +
//                     '<h2> September 2020 - Present</h2>' +
//                     '<ul>' +
//                         '<li>Provide technical content in the areas of data visualization, data science, and machine learning using Neptune resources..</li>' +
//                     '</ul>' +
//                     '</div>'

//     // Inserting the code block to wrapper element
//     document.getElementById("exp-content").innerHTML = codeBlock
// }

// function content6(){
//     let codeBlock = '<div>' +
//                     '<h1>Contributing Writer</h1>' +
//                     '<h2> October 2020 - Present</h2>' +
//                     '<ul>' +
//                         '<li>Provide technical content in the areas of data visualization, data science, and machine learning using Neptune resources..</li>' +
//                     '</ul>' +
//                     '</div>'

//     // Inserting the code block to wrapper element
//     document.getElementById("exp-content").innerHTML = codeBlock
// }

// function content7(){
//     let codeBlock = '<div>' +
//                     '<h1>Contributing Writer</h1>' +
//                     '<h2> April 2020 - Present</h2>' +
//                     '<ul>' +
//                         '<li>Provide technical content in the areas of data visualization, data science, and machine learning using Neptune resources..</li>' +
//                     '</ul>' +
//                     '</div>'

//     // Inserting the code block to wrapper element
//     document.getElementById("exp-content").innerHTML = codeBlock
// }