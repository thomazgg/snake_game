export function postContent(score) {
    try {
        const body = {
            score: score
        }
        console.log(body);
    } catch (error) {
        console.error(error);
    }
}
