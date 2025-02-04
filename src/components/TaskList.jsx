import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { deleteTask, toggleTaskCompletion } from "../features/tasks/taskSlice";
import AddTask from "./AddTask";
import EditTask from "./EditTask";


const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
    const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [openMenuId, setOpenMenuId] = useState(null);


    const memoTasks = useMemo(() => tasks, [tasks]);


    const handleEditTask = (task) => {
        setSelectedTask(task);
        setIsEditTaskModalOpen(true);
        setOpenMenuId(null);
    };


    const toggleMenu = (taskId) => {
        setOpenMenuId(openMenuId === taskId ? null : taskId);
    };

    const isAnyModalOpen = isAddTaskModalOpen || isEditTaskModalOpen;

    return (
        <div className="text-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold mb-4">{t("yourTasks")}</h1>

            <button
                onClick={() => setIsAddTaskModalOpen(true)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-slate-400 mb-4"
            >
                +
            </button>


            <AddTask
                isOpen={isAddTaskModalOpen}
                onClose={() => setIsAddTaskModalOpen(false)}
            />


            {selectedTask && (
                <EditTask
                    isOpen={isEditTaskModalOpen}
                    onClose={() => setIsEditTaskModalOpen(false)}
                    task={selectedTask}
                />
            )}


            <ul className="mt-4 flex flex-wrap gap-10">
                {memoTasks.map((task) => (
                    <li
                        key={task.id}
                        className="border p-4 mb-4 w-72 rounded shadow dark:border-gray-700 dark:bg-gray-800"
                    >
                        <div className="flex justify-between">
                            <div>
                                <h2 className="text-xl w-32 overflow-hidden font-semibold">{task.title}</h2>
                                <p className="text-gray-600 w-32 overflow-hidden dark:text-gray-400 mt-2">{t(task.description)}</p>
                                <p className="mt-2 dark:text-white">
                                    {t("Status")}:{" "}
                                    <span
                                        className={`font-bold ${task.status === "completed" ? "text-green-500" : "text-yellow-500"
                                            }`}
                                    >
                                        {t(task.status)}
                                    </span>
                                </p>
                            </div>


                            {!isAnyModalOpen && (
                                <div className="">
                                    <button
                                        onClick={() => toggleMenu(task.id)}
                                        className=" rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                            />
                                        </svg>
                                    </button>


                                    {openMenuId === task.id && (
                                        <div className=" grid bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10">
                                            <button
                                                onClick={() => {
                                                    dispatch(toggleTaskCompletion(task.id));
                                                    setOpenMenuId(null);
                                                }}
                                                className={`block w-full text-right px-2 py-2 text-sm ${task.status === "completed"
                                                    ? "text-purple-600 hover:bg-green-100 dark:hover:bg-purple-950"
                                                    : "text-green-500 hover:bg-blue-100 dark:hover:bg-green-900"
                                                    }`}
                                            >
                                                {task.status === "completed" ? t("markAsPending") : t("markAsCompleted")}
                                            </button>
                                            <button
                                                onClick={() => {
                                                    handleEditTask(task);
                                                    setOpenMenuId(null);
                                                }}
                                                className=" w-42 text-right px-2 py-2 text-sm text-yellow-500 hover:bg-yellow-100 dark:hover:bg-yellow-900"
                                            >
                                                {t("edit")}
                                            </button>
                                            <button
                                                onClick={() => {
                                                    dispatch(deleteTask(task.id));
                                                    setOpenMenuId(null);
                                                }}
                                                className="block w-full text-right px-2 py-2 text-sm text-red-500 hover:bg-red-100 dark:hover:bg-red-900"
                                            >
                                                {t("delete")}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;