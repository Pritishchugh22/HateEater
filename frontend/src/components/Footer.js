import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src={`${require("../Resources/img/placeholder.png").default}`} style={{borderRadius:"50%", width:"40px", height:"40px"}}></img>
                        </a>
                        <span className="text-muted">© 2021 HATEater, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="#"><img src={`${require("../Resources/img/mail.png").default}`} width="30px" height="30px"></img></a></li>
                        <li className="ms-3"><a className="text-muted" href="#"><img src={`${require("../Resources/img/git.png").default}`} width="30px" height="30px"></img></a></li>
                        <li className="ms-3"><a className="text-muted" href="#"><img src={`${require("../Resources/img/web.jpg").default}`} width="30px" height="30px"></img></a></li>
                        <li className="ms-3"><a className="text-muted" href="#"><img src={`${require("../Resources/img/fb.png").default}`} width="30px" height="30px"></img></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer
