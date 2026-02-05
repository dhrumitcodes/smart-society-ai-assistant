export async function raiseComplaint(input: {
  category: string;
  description: string;
  flatNumber: string;
}) {
  return {
    status: "Complaint registered successfully",
    complaintId: "CMP-" + Math.floor(Math.random() * 10000),
  };
}
