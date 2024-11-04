import SideBar from "@/components/sidebar/SideBar";
import TopMenu from "@/components/ui/top-menu/TopMenu";
import Footer from "@/components/ui/footer/Footer";

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">
            <TopMenu />
            <SideBar />
            <div className="px-0 sm:px-10">
                {children}
            </div>
            <Footer />
        </main>
    );
}