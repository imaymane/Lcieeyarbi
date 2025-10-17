import { ReactNode } from "react";

import ContactSection from "../components/header/contact-section";
import NavBar from "../components/header/nav-bar";
import Footer from "../components/footer/footer";

interface LayoutProps {
	children: ReactNode;
	activeIndex: number;
}

const Layout: React.FC<LayoutProps> = ({ children, activeIndex }) => {
	return (
		<>
			<ContactSection />
			<NavBar activeIndex={activeIndex} />
			<main className="flex-1">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
