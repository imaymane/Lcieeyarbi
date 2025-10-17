import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/page";
import NotFoundPage from "./pages/not-found-page/page";
import ApplicationFields from "./pages/applications-fields/page";
import OurLabs from "./pages/our-labs/page";
import PresidentWord from "./pages/president-word/page";
import Accrediations from "./pages/accreditations/page";
import Contact from "./pages/contact/page";
import RecruitmentPage from "./pages/recruitment-and-internships/page";

function App() {
	const routes = [
		{ path: "/", element: <Layout activeIndex={0}><HomePage /></Layout> },
		{ path: "/president-word", element: <Layout activeIndex={1}><PresidentWord /></Layout> },
		{ path: "/applications-fields", element: <Layout activeIndex={2}><ApplicationFields /></Layout> },
		{ path: "/réferences", element: <Layout activeIndex={3}><Accrediations /></Layout> },
		{ path: "/our-labs", element: <Layout activeIndex={4}><OurLabs /></Layout> },
		{ path: "/recruitment-and-internships", element: <Layout activeIndex={5}><RecruitmentPage /></Layout> },
		{ path: "/contact", element: <Layout activeIndex={6}><Contact /></Layout> },
		{ path: "*", element: <NotFoundPage /> },
	];

	return (
		<Router>
			<main className="relative flex min-h-screen flex-col">
				<Routes>
					{routes.map((route, i) => (
						<Route key={i} path={route.path} element={route.element} />
					))}
				</Routes>
			</main>
		</Router>
	);
}

export default App;
