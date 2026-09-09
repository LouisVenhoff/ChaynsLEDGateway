
const usePublish = () => {

    const publish = (data: string) => {

        fetch("https://run.chayns.codes/eb9d17e4/lightState", {
            method: "POST",
            headers: {
               "content-type": "application/json"
            },
            body: data,
        });
    }

    return publish;
}

export default usePublish;