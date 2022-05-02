import { faker } from '@faker-js/faker';

// const random_data = {
//     products: [

//     ],
//     values : [

//     ],
//     benefits: [

//     ]
// };

// function generateData() {
//     let i = 0;
//     while (i < 5) {
//         const name = faker.commerce.productName();
//         const price = faker.commerce.price(60000, 1250000, 0, "$");
//         const description = faker.commerce.productDescription();
//         const benefits = faker.commerce.productAdjective();
//         random_data.products.push(name);
//         i = i++
//     }
// }

// generateData();
// console.log(random_data)

const data = {
    products: [
        {
            name: 'Transición',
            // price: '250000',
            description: 'Plataforma 100 virtual, profesores certificados, distintos medios de pago, certificaciones con instituciones aliadas nacionales'
        },
        {
            name: 'Primaria',
            // price: '30000',
            description: 'Plataforma 100 virtual, profesores certificados, distintos medios de pago, certificaciones con instituciones aliadas nacionales'
        },
        {
            name: 'Bachillerato',
            // price: '1000',
            description: 'Plataforma 100 virtual, profesores certificados, distintos medios de pago, certificaciones con instituciones aliadas nacionales'
        },
        {
            name: 'Bachillerato para adultos',
            // price: '1000',
            description: 'Plataforma 100 virtual, profesores certificados, distintos medios de pago, certificaciones con instituciones aliadas nacionales'
        }
    ],
    values: [
        {
            name: "Innovación",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        },
        {
            name: 'Emancipación',
            description: 'Creemos en la democracia educativa, motivamos la autonomía, la flexibilidad y la independencia del aprendizaje.'
        },
        {
            name: 'Afectividad',
            description: 'Brindamos una formación integral, inclusiva y afectiva.'
        },
        {
            name: 'Creatividad',
            description: 'Creamos espacios y momentos dinámicos, que impulsan la generación de ideas nuevas, en pro de la adquisición del conocimiento.'
        }
    ],
    benefits : [
        {
            name: "Aprende a tu ritmo",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        },
        {
            name: "Aprende a tu ritmo",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        },
        {
            name: "Aprende a tu ritmo",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        },
        {
            name: "Aprende a tu ritmo",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        },
        {
            name: "Aprende a tu ritmo",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        },
        {
            name: "Aprende a tu ritmo",
            description: "Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento."
        }
    ],
    testomony : [
        {
            name: 'Patricia Parra',
            description: 'Ipsum est nulla ex ea aliqua Lorem id esse Lorem dolore veniam excepteur. Eu qui commodo aliqua culpa Lorem irure minim adipisicing adipisicing sint officia anim. Commodo laborum commodo amet id. Do officia incididunt non enim nostrud amet. Elit deserunt consequat voluptate consectetur veniam nostrud est ut nostrud cupidatat in eu. Cillum enim irure dolor eiusmod qui culpa proident tempor fugiat. Irure eu excepteur non aliqua sit fugiat est duis incididunt.'
        },
        {
            name: 'Carlos Eduardo Vasquez',
            description : 'Aliquip excepteur magna nulla reprehenderit esse incididunt laborum commodo deserunt. Magna dolore aliquip excepteur dolore et culpa. In do consequat sunt sunt nisi irure duis ut ut pariatur sunt exercitation officia nulla. Laborum mollit anim esse aliquip non aliqua anim. Fugiat cupidatat culpa duis dolore amet fugiat in cillum commodo officia consectetur ut. Esse proident occaecat quis mollit dolore enim do. Id quis Lorem sint labore amet irure ipsum ipsum officia ad ipsum ea aute.'
        }
    ]
}

export {data}