const TAG_COLORS = [
    "bg-blue-100 text-blue-700",
    "bg-pink-100 text-pink-700",
    "bg-green-100 text-green-700",
    "bg-purple-100 text-purple-700",
    "bg-yellow-100 text-yellow-700",
    "bg-red-100 text-red-700",
    "bg-indigo-100 text-indigo-700",
    "bg-teal-100 text-teal-700",
    "bg-orange-100 text-orange-700",
    "bg-cyan-100 text-cyan-700",
];

export const getTagColorById = id =>
    TAG_COLORS[id % TAG_COLORS.length];

export const tagsmock = {
    1: { id: 1, name: "Internship" },
    2: { id: 2, name: "Career" },
    3: { id: 3, name: "Resume" },
    4: { id: 4, name: "Interview" },
    5: { id: 5, name: "Skills" },
    6: { id: 6, name: "Remote Work" },
    7: { id: 7, name: "Student Life" },
    8: { id: 8, name: "Networking" },
    9: { id: 9, name: "Time Management" },
    10: { id: 10, name: "Employment" }
};


