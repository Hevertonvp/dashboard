import React from 'react';
import * as s from "./Country.Styles";

const Country = props => {
    const country = props.match.params.country;
    const countries = {
        vendas: {
            img: '/img/countries/canada.png',
            description: 'Canada is chilly'
        },
        inventario: {
            img: '/img/countries/brazil.jpg',
            description: 'Brazil is sunny'
        },
        tony: {
            img: '/img/countries/australia.jpg',
            description: 'Australia is boring'
        },
        ramos: {
            img: '/img/countries/india.jpg',
            description: 'India is awesome'
        },
        moldova: {
            img: '/img/countries/moldova.jpeg',
            description: 'Moldova is beautiful'
        },
        kenya: {
            img: '/img/countries/kenya.jpg',
            description: 'Kenya is breathtaking'
        }
    }

    return (
        <s.CountryContainer>
            <s.CountryImage img={countries[country]['img']} />
            <s.CountryDescription>{countries[country]['description']}</s.CountryDescription>
        </s.CountryContainer>
    )
}

export default Country