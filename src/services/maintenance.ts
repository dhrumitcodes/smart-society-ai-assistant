export async function getMaintenanceStatus(input: {
  flatNumber: string;
}) {
  return {
    amountDue: 2500,
    dueDate: "2026-02-15",
    status: "Pending",
  };
}
