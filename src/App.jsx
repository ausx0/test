import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import ThemeToggle from "./components/ThemeToggle";
import Notfound from "./components/Notfound";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import CompletionBar from "./components/CompletionBar";

function App() {

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <Router>
      <div className="min-h-screen dark:bg-zinc-900">
        <div className="fixed top-4 dark:text-white  flex space-x-2">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {i18n.language === "en" ? "عربي" : "English"}
          </button>
        </div>
        <ThemeToggle />

        <div className="container mx-auto p-4">
          <header className="text-center mb-8">
            <h1 className="text-4xl mt-10 font-bold dark:text-white">{t("ToDoList")}</h1>
          </header>
          <CompletionBar />
          <nav className="mb-4">
            <Link to="/" className="mr-4 dark:text-white dark:hover:bg-gray-500">Home</Link>
          </nav>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={<AddTask />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;