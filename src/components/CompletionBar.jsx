import React from "react";
import { useSelector } from "react-redux";

const CompletionBar = () => {
    const tasks = useSelector((state) => state.tasks.tasks);

    // Calculate completion percentage
    const completedTasks = tasks.filter((task) => task.status === "completed").length;
    const totalTasks = tasks.length;
    const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return (
        <div className="text-center my-8">
            <h2 className="text-2xl font-bold md:text-white mb-4">Completion</h2>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                    className="bg-blue-500 h-2 transition-all duration-500 ease-in-out rounded-full"
                    style={{ width: `${completionPercentage}%` }}
                ></div>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
                {completedTasks} of {totalTasks} tasks completed ({completionPercentage.toFixed(0)}%)
            </p>
        </div>
    );
};

export default CompletionBar;