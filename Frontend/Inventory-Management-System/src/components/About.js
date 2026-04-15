export default function About() {
    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h1 className='fw-bold mb-4'>About the System</h1>
                    <div className="custom-card">
                        <h3>MERN Stack Inventory Manager</h3>
                        <p className="text-muted">A full-stack application designed for seamless product management.</p>
                        <hr />
                        <div className="row mt-4">
                            <div className="col-md-6 mb-3">
                                <h5 className="fw-bold text-primary">Frontend</h5>
                                <p>React.js with Bootstrap 5 for a responsive, modern user interface.</p>
                            </div>
                            <div className="col-md-6 mb-3">
                                <h5 className="fw-bold text-success">Backend</h5>
                                <p>Node.js & Express.js handling RESTful API routes and server logic.</p>
                            </div>
                            <div className="col-md-6 mb-3">
                                <h5 className="fw-bold text-danger">Database</h5>
                                <p>MongoDB Atlas for scalable, cloud-based NoSQL data storage.</p>
                            </div>
                            <div className="col-md-6 mb-3">
                                <h5 className="fw-bold text-info">Features</h5>
                                <p>Real-time CRUD, Barcode tracking, and intuitive search functionality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}