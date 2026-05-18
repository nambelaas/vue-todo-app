import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import TasksPage from "@/pages/TasksPage.vue";
import SummaryPage from "@/pages/SummaryPage.vue";
import NotFoundErrorPage from "@/pages/errors/NotFoundErrorPage.vue";

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
    {
        path: "/summary",
        component: SummaryPage,
        name: "Summary"
    },
    {
        path: "/:notFound(.*)",
        name: "error.404",
        component: NotFoundErrorPage
    }
]

export default routes