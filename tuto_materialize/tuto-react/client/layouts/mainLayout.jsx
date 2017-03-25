/**
 * Created by alexandre on 06.02.2017
 */

import React from 'react';

const MainLayout = ({navbar, content, footer}) => (
    <div>
        {navbar}
        <div className="container">
            {content}
        </div>
        {footer}
    </div>
);