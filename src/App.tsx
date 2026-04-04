import Layout from "./lessons/Employee_Project/Layout/Layout"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Employee from "./lessons/Employee_Project/Employees/Employees"
import CreateEmployee from "./lessons/Employee_Project/CreateEmployee/CreateEmployee"
import { ROUTES } from "./lessons/Employee_Project/routesthighttech"
import { Provider } from "react-redux"
import{store} from "./store/store"

//Homework
// import Homework_17 from "homeworks/Homework_17/Homework_17"

//Lessons
import Lesson_17 from "lessons/Lesson_17/Lesson_17"


function App() {
  return (
    
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={ROUTES.CREATE_EMPLOYEE} />}
            />
            <Route path={ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee />} />
            <Route path={ROUTES.EMPLOYEES} element={<Employee />} />
            <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>

    /* Lessons */
    // <Lesson_17 />

    /* Homework */
    // <Homework_17 />
  )
}
export default App
