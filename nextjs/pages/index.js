import BasePage from './_base-page.js';
import MainLayout from '../components/layouts/main-layout';
import TODOView from '../components/views/todo/todo';

import './main.scss';

export default class TasksPage extends BasePage {
    render () {
        return (
          <MainLayout>
            <TODOView/>
          </MainLayout>  
        )
    }
}
