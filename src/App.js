import './styles/reset.css';
import './App.css';
import PageLayout from './Pages/PageLayout/pageLayout';
import ErrorPage from './Pages/ErrorPage/errorPage';
import MainPage from './components/MainPage/mainPage';
import About from './components/About/about';
import Courses from './components/Courses/courses';
import Education from './components/Courses/Education/education';
import Exercises from './components/Courses/Exercises/exercises';
import Recovery from './components/Courses/Recovery/recovery';
import Timetable from './components/Timetable/timetable';
import OnlineSchool from './components/Online-school/onlineSchool';
import Prices from './components/Prices/prices';
import Materials from './components/Materials/materials';
import Contacts from './components/Contacts/contacts';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageLayout />} errorElement={<ErrorPage />}>
        <Route path='/' element={<MainPage />} errorElement={<ErrorPage />} />
        <Route path='/about' element={<About />} errorElement={<ErrorPage />} />
        <Route
          path='/courses'
          element={<Courses />}
          errorElement={<ErrorPage />}
        >
          <Route
            path='/courses/education'
            element={<Education />}
            errorElement={<ErrorPage />}
          />
          <Route
            path='/courses/exercises'
            element={<Exercises />}
            errorElement={<ErrorPage />}
          />
          <Route
            path='/courses/recovery'
            element={<Recovery />}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route
          path='/timetable'
          element={<Timetable />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/online-school'
          element={<OnlineSchool />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/prices'
          element={<Prices />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/materials'
          element={<Materials />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/contacts'
          element={<Contacts />}
          errorElement={<ErrorPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
