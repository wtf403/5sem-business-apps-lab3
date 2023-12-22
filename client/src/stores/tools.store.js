import { defineStore } from "pinia";
import { useNotificationsStore } from "@/stores/notifications.store";

export const useToolsStore = defineStore("tools", () => {
  const { addError } = useNotificationsStore();

  const allTools = ref([]);

  const fetchTools = async () => {
    const { res, err } = await api.fetchTools();

    if (err !== null) {
      addError(err.message);
      return;
    }

    allOrders.value = res;

    return res;
  };

  const addTool = async (tool) => {
    const { res, err } = await api.addTool(tool);

    if (err !== null) {
      addError(err.message);
      return;
    }

    allTools.value.push(res);

    return res;
  };

  return {
    allTools,
    fetchTools,
    addTool,
  };
});
