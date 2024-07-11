import { Routes, Route } from "react-router-dom";
import About from "./client/pages/About.tsx";
import Dictionary from "./client/pages/Dictionary.tsx";
import Blog from "./client/pages/Blog.tsx";
import Home from "./client/pages/layouts/Home.tsx";
import Chat from "./client/pages/Chat.tsx";
import Login from "./adminpanel/pages/auth/Login.tsx";
import Contact from "./client/pages/Contact.tsx";
import DashboardLayout from "./adminpanel/pages/layouts/DashboardLAyout.tsx";
import HomeLayout from "./client/pages/layouts/HomeLayout.tsx";
import AdminHome from "./adminpanel/pages/layouts/AdminHome.tsx";
import TagPage from "./adminpanel/pages/tag/TagPage.tsx";
import TransLate from "./adminpanel/pages/translate/TransLate.tsx";
import CreateTranslate from "./adminpanel/pages/translate/CreateTranslate.tsx";
import UpdateTag from "./adminpanel/pages/tag/UpdateTag.tsx";
import CreateTag from "./adminpanel/pages/tag/CreateTag.tsx";
import UpdateTranslate from "./adminpanel/pages/translate/UpdateTranslate.tsx";
import UnreadedAppeals from "./adminpanel/pages/appeals/UnreadedAppeals.tsx";
import Appeals from "./adminpanel/pages/appeals/ReadedAppeals.tsx";
import PrivatePage from "./adminpanel/components/PrivatePage.tsx";

export const MainRoute = () => {
    return (
        <Routes>
            {/* Client Routes */}
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/notifications" element={<Chat />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="/login" element={<Login />} />

            {/* Dashboard Routes */}
            <Route
                path="/admin"
                element={
                    <PrivatePage>
                        <DashboardLayout />
                    </PrivatePage>
                }
            >
                <Route path={'/admin/home'}  element={<AdminHome />} />
                <Route path="/admin/tags" element={<TagPage />} />
                <Route path="/admin/tags/create" element={<CreateTag />} />
                <Route path="/admin/tag/:id" element={<UpdateTag />} />
                <Route path="/admin/translation" element={<TransLate />} />
                <Route path="/admin/translation/create" element={<CreateTranslate />} />
                <Route path="/admin/translation/update/:id" element={<UpdateTranslate />} />
                <Route path="/admin/appeals/unread" element={<UnreadedAppeals />} />
                <Route path="/admin/appeals/read" element={<Appeals />} />
            </Route>

            {/* Login Route */}
        </Routes>
    );
};
