import HomePage from "../pages/home/HomePage";
import Gebeurtenis from "../pages/events/Gebeurtenis";
import Profile from "../pages/profile/Profile";

const routes = [
    {
        path: '/',
        element: <Gebeurtenis/>,
        isPrivate: false,
    },
    {
        path: '/search-pantry',
        element: <HomePage/>,
        isPrivate: false,
    },
    {
        path: '/favorites',
        element: <Profile/>,
        isPrivate: true,
    },

]

export default routes