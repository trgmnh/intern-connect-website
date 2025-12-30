export const BackgroundGradient = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div
                className="absolute left-1/4 top-10 h-[420px] w-[420px] blur-[120px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(214,40,40,0.35), transparent 70%)"
                }}
            />

            <div
                className="absolute right-1/4 top-24 h-[420px] w-[420px] blur-[120px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(0,87,160,0.35), transparent 70%)"
                }}
            />
        </div>
    );
}