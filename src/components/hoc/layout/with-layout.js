import React from 'react'
import Header from '../../header'
import Footer from '../../footer'
import './with-layout.css'

const  withLayout = (props) => (Wrapped) => {

        return (props) =>{
            return(
            <div className="Background">
                <Header />
                    <Wrapped {...props} />
                <Footer />
            </div>
            )
        }
           
        
}

export default withLayout
