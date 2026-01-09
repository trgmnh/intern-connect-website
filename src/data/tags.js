const TAG_COLORS = [
    "bg-blue-100 text-blue-700",
    "bg-pink-100 text-pink-700",
    "bg-green-100 text-green-700",
    "bg-purple-100 text-purple-700",
    "bg-yellow-100 text-yellow-700",
    "bg-red-100 text-red-700",
    "bg-indigo-100 text-indigo-700",
    "bg-teal-100 text-teal-700",
];

const DEFAULT_TAG_COLOR = "bg-gray-100 text-gray-600";

export const getTagColorById = (tagId) => {
    if (!Number.isInteger(tagId)) return DEFAULT_TAG_COLOR;
    return TAG_COLORS[tagId % TAG_COLORS.length];
};