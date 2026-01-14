export const getPostImage = (post, size = "full") => {
    const media = post?._embedded?.["wp:featuredmedia"]?.[0];
    if (!media) return null;

    return (
        media.media_details?.sizes?.[size]?.source_url ||
        media.source_url
    );
}
