import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import SettingsScreenForgotPassw from "./pages/SettingsScreenForgotPassw";
import SettingsScreenChangePassw from "./pages/SettingsScreenChangePassw";
import WorkoutScreenDeleteWorkou from "./pages/WorkoutScreenDeleteWorkou";
import WorkoutEdit from "./pages/WorkoutEdit";
import SettingsScreenHelp from "./pages/SettingsScreenHelp";
import SettingsScreenAccount from "./pages/SettingsScreenAccount";
import WorkoutScreenWorkoutCreate from "./pages/WorkoutScreenWorkoutCreate";
import WorkoutScreenChestCategor from "./pages/WorkoutScreenChestCategor";
import WorkoutScreenExerciseAdde from "./pages/WorkoutScreenExerciseAdde";
import ExerciseScreenGallery from "./pages/ExerciseScreenGallery";
import WorkoutScreenChooseExerci from "./pages/WorkoutScreenChooseExerci";
import WorkoutScreenChooseExerci1 from "./pages/WorkoutScreenChooseExerci1";
import CommunityScreenPost from "./pages/CommunityScreenPost";
import CommunityScreenMain from "./pages/CommunityScreenMain";
import CommunityScreenPosting from "./pages/CommunityScreenPosting";
import ExerciseScreenView from "./pages/ExerciseScreenView";
import ExerciseScreenEdit from "./pages/ExerciseScreenEdit";
import WorkoutScreenPopulateWork from "./pages/WorkoutScreenPopulateWork";
import ExerciseScreenCreate from "./pages/ExerciseScreenCreate";
import WorkoutScreenNameDescribe from "./pages/WorkoutScreenNameDescribe";
import WorkoutScreenMyWorkoutList from "./pages/WorkoutScreenMyWorkoutList";
import SettingsScreenMain from "./pages/SettingsScreenMain";
import ExerciseScreenList from "./pages/ExerciseScreenList";
import WorkoutExerciseMainScreen from "./pages/WorkoutExerciseMainScreen";
import ProgressScreenMain from "./pages/ProgressScreenMain";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/settings-screen-forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/settings-screen-change-password":
        title = "";
        metaDescription = "";
        break;
      case "/workout-screen-delete-workout":
        title = "";
        metaDescription = "";
        break;
      case "/workout-edit":
        title = "";
        metaDescription = "";
        break;
      case "/settings-screen-help":
        title = "";
        metaDescription = "";
        break;
      case "/settings-screen-account":
        title = "";
        metaDescription = "";
        break;
      case "/workout-screen-workout-created":
        title = "";
        metaDescription = "";
        break;
      case "/workout-screen-chest-category":
        title = "";
        metaDescription = "";
        break;
      case "/workout-screen-exercise-added":
        title = "";
        metaDescription = "";
        break;
      case "/exercise-screen-gallery":
        title = "";
        metaDescription = "";
        break;
      case "/workout-screen-choose-exercise-list-view":
        title = "";
        metaDescription = "";
        break;
      case "/workout-screen-choose-exercise-category-view":
        title = "";
        metaDescription = "";
        break;
      case "/community-3":
        title = "";
        metaDescription = "";
        break;
      case "/community-screen-main":
        title = "";
        metaDescription = "";
        break;
      case "/community":
        title = "";
        metaDescription = "";
        break;
      case "/exercise-screen-view":
        title = "";
        metaDescription = "";
        break;
      case "/exercise-screen-edit":
        title = "";
        metaDescription = "";
        break;
      case "/workout-screen-populate-workout-list":
        title = "";
        metaDescription = "";
        break;
      case "/exercise-screen-create":
        title = "";
        metaDescription = "";
        break;
      case "/workout-screen-namedescrive-workout":
        title = "";
        metaDescription = "";
        break;
      case "/workout-screen-my-workout-list":
        title = "";
        metaDescription = "";
        break;
      case "/settings-screen-main":
        title = "";
        metaDescription = "";
        break;
      case "/exercise-screen-list":
        title = "";
        metaDescription = "";
        break;
      case "/workoutexercise-main-screen":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route
        path="/settings-screen-forgot-password"
        element={<SettingsScreenForgotPassw />}
      />
      <Route
        path="/settings-screen-change-password"
        element={<SettingsScreenChangePassw />}
      />
      <Route
        path="/workout-screen-delete-workout"
        element={<WorkoutScreenDeleteWorkou />}
      />
      <Route path="/workout-edit" element={<WorkoutEdit />} />
      <Route path="/settings-screen-help" element={<SettingsScreenHelp />} />
      <Route
        path="/settings-screen-account"
        element={<SettingsScreenAccount />}
      />
      <Route path="/new-workout" element={<WorkoutScreenWorkoutCreate></WorkoutScreenWorkoutCreate>}/>
      <Route
        path="/workout-screen-workout-created"
        element={<WorkoutScreenWorkoutCreate />}
      />
      <Route
        path="/workout-screen-chest-category"
        element={<WorkoutScreenChestCategor />}
      />
      <Route
        path="/workout-screen-exercise-added"
        element={<WorkoutScreenExerciseAdde />}
      />
      <Route
        path="/exercise-screen-gallery"
        element={<ExerciseScreenGallery />}
      />
      <Route
        path="/workout-screen-choose-exercise-list-view"
        element={<WorkoutScreenChooseExerci />}
      />
      <Route
        path="/workout-screen-choose-exercise-category-view"
        element={<WorkoutScreenChooseExerci1 />}
      />
      <Route path="/community-3" element={<CommunityScreenPost />} />
      <Route path="/community-screen-main" element={<CommunityScreenMain />} />
      <Route path="/community" element={<CommunityScreenPosting />} />
      <Route path="/exercise-screen-view" element={<ExerciseScreenView />} />
      <Route path="/exercise-screen-edit" element={<ExerciseScreenEdit />} />
      <Route
        path="/workout-screen-populate-workout-list"
        element={<WorkoutScreenPopulateWork />}
      />
      <Route
        path="/exercise-screen-create"
        element={<ExerciseScreenCreate />}
      />
      <Route
        path="/workout-screen-name-describe-workout"
        element={<WorkoutScreenNameDescribe />}
      />
      <Route
        path="/workout-screen-my-workout-list"
        element={<WorkoutScreenMyWorkoutList />}
      />
      <Route path="/progress-screen-main" element={<ProgressScreenMain />}></Route>
      <Route path="/settings-screen-main" element={<SettingsScreenMain />} />
      <Route path="/exercise-screen-list" element={<ExerciseScreenList />} />
      <Route
        path="/workoutexercise-main-screen"
        element={<WorkoutExerciseMainScreen />}
      />
    </Routes>
  );
}
export default App;
