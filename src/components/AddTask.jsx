import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { useTranslation } from "react-i18next";

const AddTask = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState("");
    const { t } = useTranslation();
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("pending");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && description.trim()) {
            dispatch(
                addTask({
                    id: Date.now(),
                    title,
                    description,
                    status,
                })
            );
            setTitle("");
            setDescription("");
            setStatus("pending");
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Add a New Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block  text-gray-700 dark:text-gray-300">{t("Title")}</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border p-2 w-full rounded dark:bg-neutral-900 dark:border-gray-600 dark:text-white"
                            placeholder="Enter task title"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300">{t("Description")}</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border rounded-lg resize-none break-words whitespace-pre-wrap dark:bg-neutral-900 dark:border-gray-600 dark:text-white"
                            rows="5"
                            placeholder="Enter task description"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300">{t("Status")}</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="border p-2 w-full rounded dark:bg-neutral-900 dark:border-gray-600 dark:text-white"
                        >
                            <option value="pending">{t("Pending")}</option>
                            <option value="completed">{t("Completed")}</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        {t("AddTask")}
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
                    >
                        {t("Cancel")}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;