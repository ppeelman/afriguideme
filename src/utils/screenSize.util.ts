export const getWidth = () => window.innerWidth;
export const getHeight = () => window.innerHeight;

export const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}