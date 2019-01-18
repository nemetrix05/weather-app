const getBannerImg = dataImg =>{
    const urlFinal = dataImg.results[0].urls.regular;
    return urlFinal;
}

export { getBannerImg }