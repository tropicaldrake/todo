import React, { useEffect, useState } from 'react';

import styles from './Template.module.css';

function Template(props){

    const[sidebar,setSidebar] = useState(props.hasSidebar ? true : false);

    return(

        <div className={styles.template}>

            {sidebar ? (

                <div>sidebar</div>

            ): null}

            <div>{props.children}</div>

        </div>

    );




}

export default Template;