import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome_Page from './pages/Welcome_Page';
import Welcome_Page_1 from './pages/Welcome_Page_1';
import Home_page from './pages/Home_page';
import Log_in from './pages/Log_in';
import Log_in_1 from './pages/Log_in_1';
import Sign_up from './pages/sign_up';
import Sign_up_1 from './pages/sign_up_1';
import Main_Menu from './pages/Main_Menu';
import Tonge_and_lip_speech from './pages/Tonge_and_lip_speech';
import Tongue_and_lip_movement from './pages/Tongue_and_lip_movement';
import Breath_Training from './pages/Breath_Training';
import Inhale_exhale from './pages/inhale_exhale';
import Inhale_exhale_1 from './pages/inhale_exhale_1';
import Lip_move from './pages/Lip_move';
import Tongue_move from './pages/Tongue_move';
import Tongue_move_1 from './pages/Tongue_move_1';
import Nasal from './pages/Nasal';
import Nasal_1 from './pages/Nasal_1';
import Nasal_2 from './pages/Nasal_2';
import Speech from './pages/speech';
import Speech_1 from './pages/speech_1';
import Even_reading from './pages/Even_reading';
import Even_reading_1 from './pages/Even_reading_1';
import Tongue_move_2 from './pages/Tongue_move_2';
import Lip_move_1 from './pages/Lip_move_1';
import Lung_volume from './pages/Lung_volume';
import Lung_volume_1 from './pages/Lung_volume_1';
import Inhale_exhale_2 from './pages/inhale_exhale_2';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/Welcome_Page']} component={Welcome_Page} />
        <Route exact path="/Welcome_Page_1" component={Welcome_Page_1} />
        <Route exact path="/Home_page" component={Home_page} />
        <Route exact path="/Log_in" component={Log_in} />
        <Route exact path="/Log_in_1" component={Log_in_1} />
        <Route exact path="/sign_up" component={Sign_up} />
        <Route exact path="/sign_up_1" component={Sign_up_1} />
        <Route exact path="/Main_Menu" component={Main_Menu} />
        <Route exact path="/Tonge_and_lip_speech" component={Tonge_and_lip_speech} />
        <Route exact path="/Tongue_and_lip_movement" component={Tongue_and_lip_movement} />
        <Route exact path="/Breath_Training" component={Breath_Training} />
        <Route exact path="/inhale_exhale" component={Inhale_exhale} />
        <Route exact path="/inhale_exhale_1" component={Inhale_exhale_1} />
        <Route exact path="/Lip_move" component={Lip_move} />
        <Route exact path="/Tongue_move" component={Tongue_move} />
        <Route exact path="/Tongue_move_1" component={Tongue_move_1} />
        <Route exact path="/Nasal" component={Nasal} />
        <Route exact path="/Nasal_1" component={Nasal_1} />
        <Route exact path="/Nasal_2" component={Nasal_2} />
        <Route exact path="/speech" component={Speech} />
        <Route exact path="/speech_1" component={Speech_1} />
        <Route exact path="/Even_reading" component={Even_reading} />
        <Route exact path="/Even_reading_1" component={Even_reading_1} />
        <Route exact path="/Tongue_move_2" component={Tongue_move_2} />
        <Route exact path="/Lip_move_1" component={Lip_move_1} />
        <Route exact path="/Lung_volume" component={Lung_volume} />
        <Route exact path="/Lung_volume_1" component={Lung_volume_1} />
        <Route exact path="/inhale_exhale_2" component={Inhale_exhale_2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;