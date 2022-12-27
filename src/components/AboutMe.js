import myPic from "../img/myPicCropped.jpg"

export default function AboutMe(){

    return (
        <section className="about-me-page">
            <h1 className="page-title about-me-title">{"<AboutMe/>"}</h1>
            <hr className="page-title-seperator"/>
            <div className="main-content">
                <img src={myPic} className="my-pic"/>
                <section className="page-split">
                    <div className="learning-journey main-content-section">
                        <h2>Learning Journey</h2>
                        <p>It wasn't until I was in my mid-20s that I finally got my chance to begin my journey. I had been working as a legal case manager at a  law firm,
                             but I was tired of feeling unfulfilled in my job. I decided to take matters into my own hands and began teaching myself web development.
                              I started by taking online courses and working through tutorials, and before long, I was making real progress. I was learning HTML, CSS, and JavaScript,
                               and I was starting to see the results of my hard work. I even built my own website from scratch, which was a huge accomplishment for me.
                                I eventually left my job as a paralegal and I decided to take my studying full time. The first few weeks were tough. It was a struggle to find the energy and motivation to keep going.
                                 But I was determined to make this work. I set aside at least a eight hours each day to work on the course materials, and before long, I was actually programming.
                                  From the very foundations of HTML and CSS to algorithms and data structures such as Binary Search Trees, Linked Lists,
                                   and Merge Sort algorithms and how to implement them in code using Javascript. Im cery excited to see where this journey leads to next.
                              </p>
                    </div>
                    <div className="pre-code main-content-section">
                        <h2>Before Programming</h2>
                        <p>As a child, I was always fascinated by technology. I remember spending hours on end playing games on my computer and downloading movies and music using torrents.
                             I had a natural curiosity about how things worked and was always eager to learn more.Despite my passion for technology, I never took the opportunity to study it formally.
                              I had decided to take on a series of odd jobs to make ends meet. But I never lost my love for technology, and I knew that one day I would find a way to turn my passion into a career.
                               I always had a thing for problem solving but I never quite put the two together. Aside from wages, obviously, the jobs I worked weren’t giving me a feeling of satisfaction,
                                I worked basic jobs from customer service to more serious roles such as marketing director and legal case manager.
                                 After years of not really getting anywhere and working unfulfilling jobs I knew what my next step in life had to be, I know I couldn't have made a better choice. </p>
                    </div>
                </section>
             
            </div>
        </section>
    )
}