
const About = () => {
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              About this site
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Tilasmi calculation</strong> is the calculating site which helps you to calculate two numbers, in this site we use the concept of <code>Redux</code> toolkit , later on we update this add to add new features. This site contains only three components <code>Navbar</code>, <code>Home</code>, <code>About</code>.  
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              About the developer
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>About the author :</strong>,This site was developed by <strong>Vansh shukla</strong>,I intrested in singing, dancing and cooking , just started to learning react js also some concepts of <code>Reduxjs</code>,
              soon i will build a useful website,thats solves the peoples problems 😊
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              About Reduxjs
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Redux Toolkit</strong> is our official recommended approach for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.RTK includes utilities that help simplify many common use cases, including <code>store setup, creating reducers and writing immutable update logic</code>, and even <code> creating entire "slices" of state at once.</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
