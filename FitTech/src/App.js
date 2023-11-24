import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ExerciseSelection from "./pages/ExerciseSelection";
import Community2 from "./pages/Community2";
import HomeScreen from "./pages/HomeScreen";
import WorkoutCreate from "./pages/WorkoutCreate";
import MyWorkoutList from "./pages/MyWorkoutList";
import SettingsScreen from "./pages/SettingsScreen";
import ProgressScreen from "./pages/ProgressScreen";
import Workoutexercise from "./pages/Workoutexercise";
import Exercise from "./pages/Exercise";
import ExerciseCreate from "./pages/ExerciseCreate";
import PopulateWorkoutList1 from "./pages/PopulateWorkoutList1";
import ExerciseEdit from "./pages/ExerciseEdit";
import ExerciseView from "./pages/ExerciseView";
import CommunityScreen from "./pages/CommunityScreen";
import Community3 from "./pages/Community3";
import IntroLogScreen from "./pages/IntroLogScreen";
import LogScreenAfterSelectingWor from "./pages/LogScreenAfterSelectingWor";
import MainScreenForEnteringWeigh1 from "./pages/MainScreenForEnteringWeigh1";
import ChooseExerciseCategoryView from "./pages/ChooseExerciseCategoryView";
import ChooseExerciseListView from "./pages/ChooseExerciseListView";
import ExerciseGallery from "./pages/ExerciseGallery";
import PopulateWorkoutList from "./pages/PopulateWorkoutList";
import ExerciseSelection1 from "./pages/ExerciseSelection1";
import EnteringReps from "./pages/EnteringReps";
import MainScreenForEnteringWeigh from "./pages/MainScreenForEnteringWeigh";
import EnteringWeight from "./pages/EnteringWeight";
import ScreenAfterLoggingBothWeig from "./pages/ScreenAfterLoggingBothWeig";
import WorkoutScreen from "./pages/WorkoutScreen";
import ExerciseSuccessfulCreation from "./pages/ExerciseSuccessfulCreation";
import SettingsAccount from "./pages/SettingsAccount";
import SettingsHelp from "./pages/SettingsHelp";
import WorkoutEdit from "./pages/WorkoutEdit";

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
      case "/community":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/workout-create":
        title = "";
        metaDescription = "";
        break;
      case "/my-workout-list":
        title = "";
        metaDescription = "";
        break;
      case "/settiings":
        title = "";
        metaDescription = "";
        break;
      case "/progress":
        title = "";
        metaDescription = "";
        break;
      case "/workoutexercise":
        title = "";
        metaDescription = "";
        break;
      case "/exercise":
        title = "";
        metaDescription = "";
        break;
      case "/exercise-create":
        title = "";
        metaDescription = "";
        break;
      case "/populate-workout-list":
        title = "";
        metaDescription = "";
        break;
      case "/exercise-edit":
        title = "";
        metaDescription = "";
        break;
      case "/exercise-view":
        title = "";
        metaDescription = "";
        break;
      case "/community-2":
        title = "";
        metaDescription = "";
        break;
      case "/community-3":
        title = "";
        metaDescription = "";
        break;
      case "/intro-log-screen":
        title = "";
        metaDescription = "";
        break;
      case "/log-screen-after-selecting-workout":
        title = "";
        metaDescription = "";
        break;
      case "/main-screen-for-entering-weight-and-reps":
        title = "";
        metaDescription = "";
        break;
      case "/choose-exercise-category-view":
        title = "";
        metaDescription = "";
        break;
      case "/choose-exercise-list-view":
        title = "";
        metaDescription = "";
        break;
      case "/exercise-gallery":
        title = "";
        metaDescription = "";
        break;
      case "/populate-workout-list1":
        title = "";
        metaDescription = "";
        break;
      case "/exercise-selection":
        title = "";
        metaDescription = "";
        break;
      case "/entering-reps":
        title = "";
        metaDescription = "";
        break;
      case "/main-screen-for-entering-weight-and-reps1":
        title = "";
        metaDescription = "";
        break;
      case "/entering-weight":
        title = "";
        metaDescription = "";
        break;
      case "/screen-after-logging-both-weight-and-reps":
        title = "";
        metaDescription = "";
        break;
      case "/workout-screen":
        title = "";
        metaDescription = "";
        break;
      case "/exercise-successful-creation":
        title = "";
        metaDescription = "";
        break;
      case "/settings-account":
        title = "";
        metaDescription = "";
        break;
      case "/settings-help":
        title = "";
        metaDescription = "";
        break;
      case "/workout-edit":
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
      <Route path="/" element={<ExerciseSelection />} />
      <Route path="/community" element={<Community2 />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/workout-create" element={<WorkoutCreate />} />
      <Route path="/my-workout-list" element={<MyWorkoutList />} />
      <Route path="/settiings" element={<SettingsScreen />} />
      <Route path="/progress" element={<ProgressScreen />} />
      <Route path="/workoutexercise" element={<Workoutexercise />} />
      <Route path="/exercise" element={<Exercise />} />
      <Route path="/exercise-create" element={<ExerciseCreate />} />
      <Route path="/populate-workout-list" element={<PopulateWorkoutList1 />} />
      <Route path="/exercise-edit" element={<ExerciseEdit />} />
      <Route path="/exercise-view" element={<ExerciseView />} />
      <Route path="/community-2" element={<CommunityScreen />} />
      <Route path="/community-3" element={<Community3 />} />
      <Route path="/intro-log-screen" element={<IntroLogScreen />} />
      <Route
        path="/log-screen-after-selecting-workout"
        element={<LogScreenAfterSelectingWor />}
      />
      <Route
        path="/main-screen-for-entering-weight-and-reps"
        element={<MainScreenForEnteringWeigh1 />}
      />
      <Route
        path="/choose-exercise-category-view"
        element={<ChooseExerciseCategoryView />}
      />
      <Route
        path="/choose-exercise-list-view"
        element={<ChooseExerciseListView />}
      />
      <Route path="/exercise-gallery" element={<ExerciseGallery />} />
      <Route path="/populate-workout-list1" element={<PopulateWorkoutList />} />
      <Route path="/exercise-selection" element={<ExerciseSelection1 />} />
      <Route path="/entering-reps" element={<EnteringReps />} />
      <Route
        path="/main-screen-for-entering-weight-and-reps1"
        element={<MainScreenForEnteringWeigh />}
      />
      <Route path="/entering-weight" element={<EnteringWeight />} />
      <Route
        path="/screen-after-logging-both-weight-and-reps"
        element={<ScreenAfterLoggingBothWeig />}
      />
      <Route path="/workout-screen" element={<WorkoutScreen />} />
      <Route
        path="/exercise-successful-creation"
        element={<ExerciseSuccessfulCreation />}
      />
      <Route path="/settings-account" element={<SettingsAccount />} />
      <Route path="/settings-help" element={<SettingsHelp />} />
      <Route path="/workout-edit" element={<WorkoutEdit />} />
    </Routes>
  );
}
export default App;
