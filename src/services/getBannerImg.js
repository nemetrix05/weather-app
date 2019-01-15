const getBannerImg = dataImg =>{
    const urlFinal = dataImg.results[0].urls.regular;
    console.log(dataImg); 
    return urlFinal;
}

export { getBannerImg }