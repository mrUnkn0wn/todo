import BasePage from './_base-page.js';
import MainLayout from '../components/layouts/main-layout';
import LoginView from '../components/containers/login-container';
import './main.scss';

export default class LoginPage extends BasePage {
    render () {
        return (
          <MainLayout>
            <LoginView/>
          </MainLayout>      
        )
    }
}
