const apiResponse = async ({url = '', options = '', errMsg = null }) => {
    try{
        const response = await fetch(url,options);
        if(!response.ok) throw Error("please reload the page");
        console.log("user created");
    } catch (err) {
        errMsg = err.message;
    }finally{
        url = ' ';
    }
}

export default apiResponse;