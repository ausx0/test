import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      ToDoList: "To Do List",
      Title:"Title",
      Description:"Description",
      Status:"Status",
      Pending:"Pending",
      Completed:"Completed",
      addTask: "AddTask",
      Cancel:"Cancel",
      yourTasks: "Your Tasks",
      markAsCompleted: "Mark as Completed",
      markAsPending: "Mark as Pending",
      edit: "Edit",
      EditTask:"EditTask",
      UpdateTask:"UpdateTask",
      delete: "Delete",
      status: "Status",
      pending: "Pending",
      completed: "Completed",
    },
  },
  ar: {
    translation: {
      ToDoList: "مدير المهام",
      Title:"اللقب",
      Description:"الوصف",
      Status:"الحالة",
      Pending:"وضع كمعلق",
      Completed:"مكتمل",
      AddTask: "إضافة مهمة",
      Cancel:"الغاء",
      yourTasks: "مهامك",
      markAsCompleted: "وضع كمكتمل",
      markAsPending: "وضع كمعلق",
      edit: "تعديل",
      EditTask:"تعديل المهمة",
      UpdateTask:"تحديث المهمة",
      delete: "حذف",
      status: "الحالة",
      pending: "معلق",
      completed: "مكتمل",
    },
  },
};
const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;