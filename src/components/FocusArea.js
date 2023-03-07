export default function FocusArea(){

    return(
        <div style={{display: 'grid', gap: '1.5rem',}}>
            <h2 style={{textAlign: 'center', fontWeight: 400}}>My fields and focus</h2>
            <div className="focusesContainer">
                <div>
                    <h3>Web & Mobile Apps</h3>
                    <p>Bringing Ideas to life through the use of powerful frameworks like React.js and React Native. </p>
                </div>

                <div>
                    <h3>Development</h3>
                    <p>Create responsive and adaptive websites/apps that can adapt to any device.</p>
                </div>

                <div>
                    <h3>UX & UI</h3>
                    <p>Design clean and intuitive interfaces to ensure beautiful designs to connect with users.</p>
                </div>
                

                <div>
                    <h3>Databases</h3>
                    <p>Build efficient and scalable data structures with database technologies. Optimize performance and implement effective strategies for reliable data storage and retrieval.</p>
                </div>
            </div>
        </div>
    )
}