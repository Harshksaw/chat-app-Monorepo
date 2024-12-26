import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";



export default function MessagingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

      <main className="flex h-screen w-screen flex-col bg-white"> {/* Main container */}
        <Navbar /> {/* Render the Navbar */}
        <div className="flex max-h-full overflow-y-hidden w-full bg-red-300"> {/* Container for Sidebar and main content */}
          <Sidebar /> {/* Render the Sidebar */}
          <main className="flex-1 p-0">{children}</main> {/* Render the route's children */}
        </div>
      </main>

  );
}