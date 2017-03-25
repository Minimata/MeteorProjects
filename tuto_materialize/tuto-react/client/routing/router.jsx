/**
 * Created by alexandre on 06.02.2017
 */

import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '/client/layouts/mainLayout.jsx';

FlowRouter.route('/', {
   action() {
       mount(MainLayout)
   }
});