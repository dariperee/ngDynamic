import { useEffect } from "react";

const NutricionAnimal = () =>{

    useEffect(() => {document.title = "Nutrición Animal | NG Dynamic";}, []);

    return(<>
        <h2>Nutricion Animal</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed, ultricies malesuada risus neque odio pharetra justo ante, 
            facilisis phasellus cras euismod curae dictum potenti. Lobortis dis nisi nam ultrices aptent, feugiat tellus condimentum 
            tempor porttitor in, magna vehicula euismod facilisis. Auctor rhoncus pulvinar varius luctus mauris pellentesque consequat 
            dui diam, nunc ligula massa mi at purus leo netus ridiculus tristique, vehicula in ut placerat cubilia faucibus donec 
            feugiat.

        Magna sollicitudin nam primis purus gravida mus suspendisse dis montes, aliquam euismod vel tincidunt lectus ullamcorper 
        egestas per, porttitor praesent nec aenean mollis facilisis neque sagittis. Facilisi sed suspendisse in habitant commodo 
        nulla nisl cursus, sollicitudin metus massa molestie blandit porta volutpat tempor ante, fermentum montes platea sodales 
        est ultrices nunc. Maecenas posuere cum facilisi in taciti euismod tempus, luctus velit purus montes nostra mauris, 
        pretium primis condimentum porttitor iaculis tristique.</p>
    </>)
}

export default NutricionAnimal