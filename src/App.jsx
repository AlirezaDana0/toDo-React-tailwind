import Router from "./Router";

import BookList from "./components/TodoList";
function App() {
  return (
    <div className="min-h-screen max-w-[100vh] p-4 mx-auto flex flex-col">
      <header className=" z-10 text-center bg-[#092635] text-white p-3 rounded-bl-[45px] rounded-br-[45px] font-bold text-3xl">
        Books List
      </header>
      <BookList />
      
      <Router />
      <footer className="text-center bg-[#092635] text-white p-5 rounded-tl-[45px] rounded-tr-[45px] font-bold">
        0 Books
      </footer>
    </div>
  );
}

export default App;
