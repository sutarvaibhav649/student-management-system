import Navbar from "./Navbar";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
