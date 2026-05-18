import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import TasksPage from "@/pages/TasksPage.vue";

const routes = [
    {
        path: "/tasks",
        component: TasksPage,
        name: "Tasks"
    },
    {
        path: "/login",
        component: LoginPage,
        name: "Login"
    },
    {
        path: "/register",
        component: RegisterPage,
        name: "Register"
    },
]

export default routes