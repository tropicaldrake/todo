import React from 'react';


function RequireLogin(props){

    return(

        <React.Fragment>

            {props.apiKey ? (


                <div>Login!</div>


            ) : (


                <div>Nologin!</div>


            )}



        </React.Fragment>

    );

}

export default RequireLogin;