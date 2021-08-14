import React from 'react'
import Header from '../Header/Header'
import Footer2 from '../Footer/Footer2'
function Account() {
    return (
        <>
        <Header />
        <div className="register-main-box">
            <div className="register-container" data-aos="fade-up">
            <h1>Edit your info</h1>
                <form className="register-form" data-aos="fade-up">
                    <div>
                    <label>Name</label><br />
                    <input type="text" value="ds" style={{"background":"transparent"}} disabled={true}/>
                    </div>
                    <div>
                    <label>Email</label><br />
                    <input type="text" value="sd"  disabled style={{"background":"transparent"}}/><br />
                    </div>
                    <div><label>Password </label><br />
                    <input type="password" /><br /></div>
                    <div>
                    <label>Confirm Password </label><br />
                    <input type="password" /><br />
                    </div>
                    <button className="register-submit" >UPDATE</button>
                </form>
          </div>
          </div>
        <Footer2 />
        
            
        </>
    )
}

export default Account
