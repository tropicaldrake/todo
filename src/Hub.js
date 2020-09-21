import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import HubTemplate from './HubTemplate';
import RequireLogin from './RequireLogin';

function Hub(props){


    return(

        <RequireLogin apiKey={props.apiKey}>

            <HubTemplate>

                <h1>{props.apiKey}</h1>

            </HubTemplate>

        </RequireLogin>


    );



}

export default Hub;