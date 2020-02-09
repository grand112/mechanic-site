// dane do galerii
const galeriaButton = document.querySelectorAll('.galeria');
const headerGalleria = "Galeria";

const naglowekGaleria = `
                            <div class="d-flex justify-content-center w-100 h1 mt-2 text-white">
                                ${headerGalleria}
                            </div>
                        `;
const naGalerie = `
                    <div class="akt container px-4 py-4 my-4">
                    <div class="wpis d-flex justify-content-center">
                        <div class="opis py-4 row">
                            <div class="col-lg-3 col-md-4 col-6 mb-4 d-block ">
                                    <img class="img-thumbnail" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-mechanics-workshop-paul-freidlund.jpg" alt="">
                            </div>
                            <div class="col-lg-3 col-md-4 col-6 mb-4 d-block">
                                    <img class="img-thumbnail" src="https://www.cassarautomotive.com.au/wp-content/uploads/2019/01/new-cassar-automotive-mechanic-workshop-2-s-847x460.jpg" alt="">
                            </div>
                            <div class="col-lg-3 col-md-4 col-6 mb-4 d-block">
                                    <img class="img-thumbnail" src="https://www.envyautomotive.com.au/portals/0/WORKSHOP222.jpg?ver=2015-10-27-094617-470" alt="">
                            </div>
                            <div class="col-lg-3 col-md-4 col-6 mb-4 d-block">
                                    <img class="img-thumbnail" src="https://www.austinautomotive.com/wp-content/uploads/austin-automotive-shop-interior-1920x800_c.jpg" alt="">
                            </div>
                            <div class="col-lg-3 col-md-4 col-6 mb-4 d-block">
                                    <img class="img-thumbnail" src="https://decaturautorepairs.com/images/headers/slide1.jpg" alt="">
                            </div>
                            <div class="col-lg-3 col-md-4 col-6 mb-4 d-block">
                                    <img class="img-thumbnail" src="https://www.fenderbender.com/ext/resources/publication/2019/0919/FB_CaseStudy_0919_5.jpg?height=635&t=1567021606&width=1200" alt="">
                            </div>
                            <div class="col-lg-3 col-md-4 col-6 mb-4 d-block">
                                    <img class="img-thumbnail" src="https://i.pinimg.com/originals/64/76/1b/64761bc51267c0d6f35827c8d0af9d5c.jpg" alt="">
                            </div>
                            <div class="col-lg-3 col-md-4 col-6 mb-4 d-block">
                                    <img class="img-thumbnail" src="https://c1.staticflickr.com/4/3735/11343808444_7bf36d8abe_b.jpg" alt="">
                            </div>
                            <div class="col-lg-3 col-md-4 col-6 mb-4 d-block">
                                    <img class="img-thumbnail" src="https://pbs.twimg.com/media/D_CmQbFXoAAQjCZ.jpg:large" alt="">
                            </div>
                            <div class="col-lg-3 col-md-4 col-6 mb-4 d-block">
                                    <img class="img-thumbnail" src="https://gasmonkeygarage.com/wp-content/uploads/2019/07/IMG_7392-e1571088427798.jpg" alt="">
                            </div>
                            <div class="col-lg-3 col-md-4 col-6 mb-4 d-block">
                                    <img class="img-thumbnail" src="https://gasmonkeygarage.com/wp-content/uploads/2019/07/Josh-working.jpg" alt="">
                            </div>
                            <div class="col-lg-3 col-md-4 col-6 mb-4 d-block">
                                    <img class="img-thumbnail" src="https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54caa0df15d7e_-_pmgarageshot_400_0410-de.jpg" alt="">
                            </div>
                            <div class="embed-responsive embed-responsive-16by9 col-11 mx-auto img-thumbnail">
                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6n3pFFPSlW4" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    </div>
                  `;

//zmiana mida po wcisnieciu buttona galeria
for(let i=0;i<galeriaButton.length;i++)
{
        galeriaButton[i].addEventListener("click", function(){
                mid.innerHTML= naglowekGaleria+naGalerie;
            //przewinięcie do mida przy kliknięciu na element o klasie galeria z menu
            akt.scrollIntoView();
            });
}


